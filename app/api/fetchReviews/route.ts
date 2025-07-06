import { client } from '../../../sanity/lib/sanity';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const query = `*[_type == "review"] | order(createdAt desc){
      _id, name, message, createdAt
    }`;
    const reviews = await client.fetch(query);
    return NextResponse.json({ reviews });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
