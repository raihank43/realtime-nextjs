import { db } from "@/db/config";
import { request } from "http";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: Request, res: any) {
  try {
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.flushHeaders();

    const collection = db.collection("messages");
    const result = await collection.find().toArray();

    // Mengirimkan event ke client setiap detik
    const interval = setInterval(() => {
      res.write(`data: ${new Date().toISOString()}\n\n`);
    }, 1000);

    // Membersihkan interval saat client memutuskan koneksi
    req.on("close", () => {
      clearInterval(interval);
      res.end();
    });

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
