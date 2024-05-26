import { db } from "@/db/config";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const collection = db.collection("messages");
    const result = await collection.find().toArray();
    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
  }
}

export async function POST(req: NextRequest) {
  try {
    const collection = db.collection("messages");
    const { message } = await req.json();

    const result = await collection.insertOne({ message });

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
  }
}
