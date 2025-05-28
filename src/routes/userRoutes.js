import { Router } from "express";
import { forgotPasswordController, loginUserController, registerUserController, changePasswordController } from "../controllers/userController.js";

const userRoutes = Router();

userRoutes.post('/register', registerUserController);
userRoutes.post('/login', loginUserController);
userRoutes.post('/forgor-password', forgotPasswordController);
userRoutes.post('/change-password', changePasswordController);

export default userRoutes;