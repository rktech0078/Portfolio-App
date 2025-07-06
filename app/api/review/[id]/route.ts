import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params; // Now you can access the 'id'

    // Your logic to delete the review with the given id goes here
    console.log(`Attempting to delete review with ID: ${id}`);

    // Example: Replace with your actual database logic
    // const deletedReview = await db.review.delete({ where: { id } });

    return NextResponse.json({ message: `Review ${id} deleted successfully.` }, { status: 200 });

  } catch (error) {
    console.error("Error deleting review:", error);
    return NextResponse.json({ message: "An error occurred while deleting the review." }, { status: 500 });
  }
}