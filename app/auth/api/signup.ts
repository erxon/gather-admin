import { createUser } from "@/app/lib/user";
import { NextResponse } from "next/server";

export default async function signup({username, password}:{username: string; password: string}) {
  try {
    await createUser({ username, password });
    return
  } catch (error) {
    return error
  }
}
