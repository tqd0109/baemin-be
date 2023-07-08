import { Router } from "express";
// Full URL
import { randomCatHandler } from "../controller/randomCat.js";
import { menuByMerchant, readMerchant } from "../controller/readMerchant.js";

const baseRouter = Router();

baseRouter.get("/merchants", readMerchant);
baseRouter.get("/merchant/:id/menu", menuByMerchant);
// baseRouter.get('/random-quote/c',randomQuoteHandler)

export default baseRouter;

// import { getPayment } from './../controller/payment'
// import { Router } from "express"
// import { paymentRouter } from './payment'
// // Full URL

// const baseRouter = Router()

// baseRouter.get('/payment/:paymentId', getPayment)

// baseRouter.use(paymentRouter)
// export default baseRouter
