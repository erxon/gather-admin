import passport from "passport";
import { setLoginSession } from "../../utils/auth";
import { localStrategy } from "../../utils/passport-local";
import type { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  const authenticate = (method: string, req: Request, res: Response) =>
    new Promise((resolve, reject) => {
      passport.authenticate(
        method,
        { session: false },
        (error: object, token: string) => {
          if (error) {
            reject(error);
          } else {
            resolve(token);
          }
        }
      )(req, res);
    });
  passport.use(localStrategy);
  
  const user = await authenticate("local", request, response);

  if (!user) return new Response("user not found", { status: 400 });

  const session = { ...user };

  await setLoginSession(response, session).then((data) => {
    console.log(data);
  });

  return new Response("success", {
    status: 200,
  });
}
