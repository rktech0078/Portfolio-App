// /app/api/review/[id]/route.ts
import { client } from "@/sanity/lib/sanity";
import { NextRequest, NextResponse } from "next/server";

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
    return NextResponse.json({ success: false, error: "Failed to update review" }, { status: 500 });
  }
}

/**
 * The DELETE function signature has been updated to match the style of PATCH.
 * Instead of destructuring in the signature itself, we take the whole `context`
 * object and then get `params` from it inside the function.
 */
export async function DELETE(
  request: NextRequest, // The request object is the first argument.
  context: { params: { id: string } } // The context object is the second.
) {
  // Destructure params from the context object.
  const { params } = context;

  try {
    // Use the id from params to delete the document.
    await client.delete(params.id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in DELETE request:", error);
    return NextResponse.json({ success: false, error: "Failed to delete review" }, { status: 500 });
  }
}
