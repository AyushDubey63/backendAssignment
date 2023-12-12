import mongoose, { Schema } from "mongoose";

const itemSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
},{_id:false})

const orderSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  items: [ itemSchema ],
},
);

export const Order = mongoose.model("Order",orderSchema)
