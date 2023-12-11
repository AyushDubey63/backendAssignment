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


const catalogSchema = new Schema({
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

export const Catalog = mongoose.model("Catalog",catalogSchema)
