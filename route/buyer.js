import { Router } from "express";
import { getCatalogBySellerId, getSellers } from "../controller/catalog.controller.js";

const buyerRouter = Router();

buyerRouter.get('/list-of-sellers',getSellers ).get('/seller-catalog/:seller_id', getCatalogBySellerId).post('/create-order/:seller_id',)

export default buyerRouter