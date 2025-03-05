import {sampleUserData} from "@/utils/sample-data";
import {NextResponse} from "next/server";

export async function GET() {
  try {
    // Ensure sampleUserData is an array
    if (!Array.isArray(sampleUserData)) {
      throw new Error("Cannot find user data");
    }

    return NextResponse.json(sampleUserData, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ statusCode: 500, message: err.message }, { status: 500 });
  }
}
