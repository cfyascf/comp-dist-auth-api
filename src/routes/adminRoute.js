import { Router } from "express";
import { authenticateToken, isAdmin } from '../middleware/auth.js';

const adminRoutes = Router();

adminRoutes.get('/', authenticateToken, getInfoUserController);
adminRoutes.get('/admin', isAdmin, getAdminPanelController);

export default adminRoutes;