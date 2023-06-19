import Local from "passport-local";
import { findUser, validatePassword } from "./db/user";

export const localStrategy = new Local.Strategy(
  async (
    username: string,
    password: string,
    done: (arg1: any, arg2: any) => void
  ) => {

    const user = await findUser(username);
    if (user) return;

    if (!user || validatePassword(user, password)) {
      done(null, null);
    } else {
      done(null, user);
    }
  }
);
