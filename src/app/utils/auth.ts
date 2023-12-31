import Iron from "@hapi/iron";
import { MAX_AGE, setTokenCookie, getTokenCookie } from "./auth-cookies";
import type { NextRequest, NextResponse } from "next/server";

const TOKEN_SECRET = process.env.NEXT_PUBLIC_TOKEN_SECRET;

export async function setLoginSession(res: NextResponse, session: any) {
  if (TOKEN_SECRET === undefined) return;
  const createdAt = Date.now();
  // Create a session object with a max age that we can validate later
  const obj = { ...session, createdAt, maxAge: MAX_AGE };
  const token = await Iron.seal(obj, TOKEN_SECRET, Iron.defaults);
  setTokenCookie(res, token);
}

export async function getLoginSession(req: NextRequest) {
  if (TOKEN_SECRET === undefined) return;
  const token = getTokenCookie(req);

  if (!token) return;

  const session = await Iron.unseal(token, TOKEN_SECRET, Iron.defaults);
  const expiresAt = session.createdAt + session.maxAge * 1000;

  // Validate the expiration date of the session
  if (Date.now() > expiresAt) {
    throw new Error("Session expired");
  }

  return session;
}
