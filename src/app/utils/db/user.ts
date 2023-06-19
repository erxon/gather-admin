import crypto from "crypto";
import Admin from "./models/admin";
import dbConnect from "./dbConnect";


interface user{
  salt: string;
  hash: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
}


export async function createUser({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  await dbConnect()

  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  const user = {
    createdAt: Date.now(),
    username,
    hash,
    salt,
  };
  const newAdmin = await Admin.create(
    user
  )

  return { data: newAdmin };
}

export async function findUser(username: string) {
  const user = await Admin.findOne({username: username});
  return user;
}

export function validatePassword(
  user: user,
  inputPassword: string
) {
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, "sha512")
    .toString("hex");
  const passwordMatch = user.hash === inputHash;
  return passwordMatch;
}
