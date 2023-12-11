import { Router } from "express";
import { createCatalog } from "../controller/catalog.controller.js";

const sellerRouter = Router();

sellerRouter.post('/create-catalog',createCatalog ).get('/orders', )
export default sellerRouter