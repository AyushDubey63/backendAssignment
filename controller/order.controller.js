import { Order } from "../model/Order.js";


export const createOrder = async (req, res) => {
  const itemsList = req.body.items;

  const { orderid } = req.params;
  
  if (!orderid) {
    return res.status(400).json({ error: 'Order ID is missing in the request.' });
  }
  const id = String(orderid);
  const doc = new Order({
    _id: id,
    items: itemsList
  });

  try {
    await doc.save();
    res.status(200).json(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const data = await Order.find();
    res.status(200).json(data)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

