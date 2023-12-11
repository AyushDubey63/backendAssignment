import { Router } from "express";
import { createItem, getItems, getItemsBySellerName } from "../controller/item.controller.js";
// import { loginUser, registerUser } from "../controller/auth.controller.js";

const itemRouter = Router();

itemRouter.get('/', getItems).get('/:sellerName',getItemsBySellerName).post('/newItem', createItem)

export default itemRouter