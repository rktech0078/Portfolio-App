import { client } from "../../../sanity/lib/sanity";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, message, rating } = body;

  try {
    const result = await client.create({
      _type: "review",
      name,
      message,
      createdAt: new Date().toISOString(),
      rating,
    });

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
