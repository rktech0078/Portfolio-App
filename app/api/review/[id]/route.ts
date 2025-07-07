// /app/api/review/[id]/route.ts
import { client } from "@/sanity/lib/sanity";
import { NextRequest, NextResponse } from "next/server";

// PATCH - Update Review
export async function PATCH(request: NextRequest) {
  // Get the id from the URL
  const url = new URL(request.url);
  const id = url.pathname.split("/").pop();

  if (!id) {
    return NextResponse.json({ success: false, error: "No ID provided" }, { status: 400 });
  }

  const data = await request.json();

  try {
    await client.patch(id).set(data).commit();
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
export async function DELETE(request: NextRequest) {
  // Get the id from the URL
  const url = new URL(request.url);
  const id = url.pathname.split("/").pop();

  if (!id) {
    return NextResponse.json({ success: false, error: "No ID provided" }, { status: 400 });
  }

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
