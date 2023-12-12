import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './route/auth.js';
import buyerRouter from './route/buyer.js';
import sellerRouter from './route/seller.js';

//creating express server
const server = express();

server.use(express.json());
dotenv.config()

// setting routes 
server.use('/api/auth',userRouter)
server.use('/api/buyer',buyerRouter)
server.use('/api/seller', sellerRouter)

const port = process.env.PORT
const url = process.env.MONGO_URL

// mongoose connection 
const connect = async() => {
  await mongoose.connect(url).then(() => {
    console.log("database connected")
  }).catch((err) => {
    console.log(err)
  })
}

connect();

//starting port
server.listen(port, () => {
  console.log("server started")
})