import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import passport from "passport";
import { localStrategy } from "./app/utils/passport-local";
// This function can be marked `async` if using `await` inside

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/auth/api/login")) {
    
    passport.initialize();

    return NextResponse.next();
  }
}
