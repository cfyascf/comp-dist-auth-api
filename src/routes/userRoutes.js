import { Router } from "express";
import { forgotPasswordController, loginUserController, registerUserController } from "../controllers/userController.js";

const userRoutes = Router();

userRoutes.post('/register', registerUserController);
userRoutes.post('/login', loginUserController);
userRoutes.post('/forgor-password', forgotPasswordController);

export default userRoutes;