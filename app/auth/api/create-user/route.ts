import signup from "../signup";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const result = await signup({
    username: body.username,
    password: body.password,
  });
  return NextResponse.json({result})
}
