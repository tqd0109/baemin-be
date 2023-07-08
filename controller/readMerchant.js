import fetch from "node-fetch";
import { writeFileSync, readFileSync } from "fs";
import { Buffer } from "buffer";
import { dbConnection } from "../db/index.js";
import {
  MERCHANT_COLLECTION_NAME,
  DB_NAME,
  FOOD_COLLECTION_NAME,
} from "../config/index.js";
const readMerchant = async (request, response) => {
  const merchants = await dbConnection
    .db(DB_NAME)
    .collection(MERCHANT_COLLECTION_NAME)
    .find({})
    .toArray();
  response.setHeader("Content-Type", "application/json");
  response.send(merchants);
};

const menuByMerchant = async (request, response) => {
  const merchantFood = await dbConnection
    .db(DB_NAME)
    .collection(FOOD_COLLECTION_NAME)
    .find({})
    .toArray();
  response.setHeader("Content-Type", "application/json");
  response.send(merchantFood);
};

export { readMerchant };
export { menuByMerchant };
