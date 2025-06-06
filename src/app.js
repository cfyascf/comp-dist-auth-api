import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

// ..configure server
const app = express();

app.use(cors({
    origin: '*'
}));
app.use(express.json());

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/admin', userRoutes);
app.get('/', (req, res) => res.send('App rodando no Azure!'));

export default app;