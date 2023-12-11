import { Order } from "../model/Order.js";


export const createOrder = async (req, res) => {
  const data = new Order(req.body)
  try {
    await data.save();
    res.status(201).json(data)
  } catch (error) {
    res.status(400).json(error)
  }
}