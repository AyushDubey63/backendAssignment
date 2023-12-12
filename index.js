import express from 'express'
import mongoose from 'mongoose'
import userRouter from './route/auth.js';
import buyerRouter from './route/buyer.js';
import sellerRouter from './route/seller.js';
import bodyParser from 'body-parser';

const server = express();
const port = 9000

server.use(express.json())
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use('/api/auth',userRouter)
server.use('/api/buyer',buyerRouter)
server.use('/api/seller',sellerRouter)
const connect = async() => {
  await mongoose.connect('mongodb://127.0.0.1:27017/assignment').then(() => {
    console.log("database connected")
  }).catch((err) => {
    console.log(err)
  })
}

connect();
server.listen(port, () => {
  console.log("server started")
})