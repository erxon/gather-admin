import { NextResponse } from "next/server";
import { createUser, findUser } from "../user";

export async function POST(req: Request) {
  const body = await req.json();

  if (!body.username || !body.password) {
    return new Response("Empty fields", {
      status: 400,
    });
  }
  const isUserExist = () => {
    const user = findUser(body.username)
    if (user){
      return true;
    } else {
      return false;
    }
  }
  if (isUserExist()) {
    return new Response("username already registered", {
      status: 400,
    });
  }
  

  const user = createUser({
    username: body.username,
    password: body.password,
  });
  return NextResponse.json(user);
}
