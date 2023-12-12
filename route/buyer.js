import { Router } from "express";
import { getCatalogBySellerId, getSellers } from "../controller/catalog.controller.js";
import { createOrder } from "../controller/order.controller.js";

const buyerRouter = Router();

buyerRouter.get('/list-of-sellers',getSellers ).get('/seller-catalog/:seller_id', getCatalogBySellerId).post('/create-order/:orderid',createOrder)

export default buyerRouter