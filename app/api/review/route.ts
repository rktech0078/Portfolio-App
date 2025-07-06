// /app/api/review/route.ts
import { client } from '../../../sanity/lib/sanity';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();
  try {
    await client.create({
      _type: 'review',
      ...data,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
