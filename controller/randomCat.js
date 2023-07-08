import fetch from "node-fetch";
import { writeFileSync, readFileSync } from "fs";
import { Buffer } from "buffer";

const randomCatHandler = async (request, response) => {
  const catServerUrl = "https://cataas.com/c";
  const catResponse = await fetch(catServerUrl);
  const arrBuff = await catResponse.arrayBuffer();
  writeFileSync("cat-from-nodejs.jpg", Buffer.from(arrBuff));
  const data = readFileSync("cat-from-nodejs.jpg");

  response.setHeader("Content-Type", "image/jpeg");
  response.send(data);
};
export { randomCatHandler };
