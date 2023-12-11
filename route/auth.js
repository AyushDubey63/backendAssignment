import { Router } from "express";
import { loginUser, registerUser } from "../controller/auth.controller.js";

const userRouter = Router();

userRouter.post('/register', registerUser).post('/login', loginUser)

export default userRouter