import mongoose, { Schema } from "mongoose";

const itemSchema = new Schema({
  productName: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true
  }
})


const orderSchema = new Schema({
  sellerId: {
    type: String,
    required: true,
    unique: true
  }, 
  items: {
    type: [itemSchema],
    required: true
  }
});

export const Order = mongoose.model("Order",orderSchema)
