import { dbConnection } from "./../db/index.js";
import { DB_NAME, USER_COLLECTION_NAME } from "../config";
import { constants } from "buffer";
import { genSaltSync, hash, compare } from "bcrypt";
import { error } from "console";
import * as jwt from "jsonwebtoken";
const SALT_ROUND = 10;
const TOKEN_SECRET = "dsadasdas";

const createUser = async (userData) => {
  let plainPw = userData["password"];
  const pwHashValue = await hash(plainPw, SALT_ROUND);
  // TODO: verify user before inserting to database
  await dbConnection.db(DB_NAME).collection(USER_COLLECTION_NAME).insertOne({
    name: userData.name,
    phoneNumber: userData.phoneNumber,
    username: userData.username,
    password: pwHashValue,
    customAddress: [],
  });
};

createUser({
  name: "Trung Do",
  "phone number": "+84947054293",
  password: "abc123",
  userName: "trungdo123",
});

const userSignIn = async (credential) => {
  const username = credential["username"];
  const promptedPw = credential["password"];

  const result = dbConnection
    .db(DB_NAME)
    .collection(USER_COLLECTION_NAME)
    .insertOne({
      username: username,
    });

  const hashedPw = result["password"];
  const compareResult = await compare(promptedPw, hashedPw);
  if (!compareResult) throw new Error("Invalid credential.");
  const token = await jwt.sign(JSON.stringify(result), TOKEN_SECRET, {
    expiresIn: "40s",
  });
  return token;
};

const tk = await userSignIn({
  username: "trungdo123",
  password: "abc123",
});

console.log(tk);
