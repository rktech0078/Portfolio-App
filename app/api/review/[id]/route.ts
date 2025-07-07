// /app/api/review/[id]/route.ts
import { client } from "@/sanity/lib/sanity";
import { NextRequest, NextResponse } from "next/server";

// PATCH - Update Review
export async function PATCH(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const { params } = context;
  const data = await request.json();

  try {
    await client.patch(params.id).set(data).commit();
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in PATCH request:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update review" },
      { status: 500 }
    );
  }
}

// DELETE - Delete Review
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    await client.delete(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in DELETE request:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete review" },
      { status: 500 }
    );
  }
}
