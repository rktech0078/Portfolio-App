// /app/api/review/[id]/route.ts
import { client } from "@/sanity/lib/sanity";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest, context: { params: { id: string } }) {
  const { params } = context;
  const data = await request.json();

  try {
    await client.patch(params.id).set(data).commit();
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}

export async function DELETE(_request: NextRequest, context: { params: { id: string } }) {
  const { params } = context;

  try {
    await client.delete(params.id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
