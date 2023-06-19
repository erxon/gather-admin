import { NextResponse } from "next/server";
import { createUser } from "../../utils/db/user";

export async function POST(req: Request) {
  const body = await req.json();

  if (!body.username || !body.password) {
    return new Response("Empty fields", {
      status: 400
    });
  }
  const user = createUser({
    username: body.username,
    password: body.password,
  });
  return NextResponse.json(user);
}
