// /app/api/review/[id]/route.ts
import { client } from "../../../../sanity/lib/sanity";
import { NextResponse } from 'next/server';

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const data = await req.json();
  try {
    await client.patch(params.id).set(data).commit();
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}

export async function DELETE(_: unknown, { params }: { params: { id: string } }) {
  try {
    await client.delete(params.id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
