import { NextRequest, NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
    try {
        const secret = process.env.GITHUB_WEBHOOK_SECRET;
        const eventType = req.headers.get('x-github-event');

        console.log(`Received Webhook Event: ${eventType}`);

        if (!secret) {
            console.error('Missing GITHUB_WEBHOOK_SECRET');
            return NextResponse.json({ error: 'Webhook secret not configured' }, { status: 500 });
        }

        // Handle Ping (Setup Test)
        if (eventType === 'ping') {
            return NextResponse.json({ message: 'Pong! Webhook connected successfully.' }, { status: 200 });
        }

        if (eventType !== 'push') {
            return NextResponse.json({ message: `Ignored event: ${eventType}` }, { status: 200 });
        }

        const body = await req.json();
        const repo = body.repository;

        if (!repo) {
            return NextResponse.json({ error: 'No repository data found' }, { status: 400 });
        }

        console.log(`Syncing Repo: ${repo.name}`);

        // Prepare Sanity Data
        const projectData = {
            _type: 'project',
            title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '), // Humanize name
            subtitle: repo.language || 'Web Development',
            description: repo.description || 'No description provided.',
            projectLink: repo.html_url,
            // We need a unique ID to update existing docs instead of creating new ones
            _id: `github-${repo.id}`,
            tags: repo.topics || [], // topics from webhook might be empty, need fetch?
            // Default order
            order: 0,
            // Image is required by schema! We need a placeholder or GitHub avatar.
            // We can't easily upload an image via URL in one go without downloading it first.
            // WE will rely on a "Default" image asset ID if we can hardcode one, 
            // OR we skip image for now (but schema requires it).
            // WORKAROUND: We will leave image empty and let user fix it, OR use a known image asset ID.
            // Let's assume we can fetch the owner avatar.
        };

        // To handle image, we need to upload it.
        // Simplifying: We will check if doc exists. If NO, we might fail validation if image is missing.
        // We will check if image is already set.

        // 1. Check if doc exists
        const existing = await client.fetch(`*[_id == $id][0]`, { id: projectData._id });

        // If it exists, we update text fields but keep existing image
        if (existing) {
            await client.patch(existing._id)
                .set({
                    title: projectData.title,
                    subtitle: projectData.subtitle,
                    description: projectData.description,
                    projectLink: projectData.projectLink,
                    tags: projectData.tags
                })
                .commit();
            return NextResponse.json({ message: 'Project Updated', id: existing._id });
        } else {
            // If New: We need an image.
            // We will TRY to upload the owner avatar.
            const avatarUrl = repo.owner.avatar_url;
            let imageAsset;

            if (avatarUrl) {
                try {
                    // We need to fetch the image buffer
                    const imgRes = await fetch(avatarUrl);
                    const imgBuffer = await imgRes.arrayBuffer();
                    imageAsset = await client.assets.upload('image', Buffer.from(imgBuffer));
                } catch (e) {
                    console.error("Failed to upload avatar", e);
                }
            }

            const doc = {
                ...projectData,
                image: imageAsset ? { _type: 'image', asset: { _type: "reference", _ref: imageAsset._id } } : undefined
            }

            // Note: Schema validation might fail if image is required and we failed to get it.
            // We proceed and hope for best or user sets "validation: (Rule) => Rule.required()"
            await client.createOrReplace(doc);
            return NextResponse.json({ message: 'Project Created', id: projectData._id });
        }

    } catch (error: unknown) {
        console.error('Webhook Error:', error);
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}
