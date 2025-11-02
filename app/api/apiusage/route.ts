// app/api/apiusage/route.ts
import { stat } from "fs";
import { NextResponse } from "next/server";
let message: string = "default message";

// receiving data
export async function POST(req: Request) {
  const data = await req.json();
  message = data.message;
  console.log("POST request received with message:", message);
  
  return NextResponse.json({ status: "Message received" });
}

// sending data
export async function GET() {
  console.log("GET request received");
  
  return NextResponse.json({ message: message });
}
