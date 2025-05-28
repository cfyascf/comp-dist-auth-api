import { Router } from "express";
import { forgotPasswordController, loginUserController, registerUserController } from "../controllers/userController.js";
import { authenticateToken } from "../middlewares/auth.js";

const userRoutes = Router();

userRoutes.post('/register', registerUserController);
userRoutes.post('/login', loginUserController);
userRoutes.post('/forgot-password', authenticateToken, forgotPasswordController);

export default userRoutes;