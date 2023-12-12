import { Router } from "express";
import { createCatalog } from "../controller/catalog.controller.js";
import { getAllOrders } from "../controller/order.controller.js";

const sellerRouter = Router();

sellerRouter.post('/create-catalog',createCatalog ).get('/orders',getAllOrders )
export default sellerRouter