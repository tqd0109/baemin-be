// js ->
// const express = require('express')
import express from "express";
// import { helloHandler } from './controller'

import router from "./router/index.js";
import { dbConnection } from "./db/index.js";

const app = express();
const port = 3000;
app.use(express.json());
app.use(router);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
