import express from 'express';
import dotenv from 'dotenv';
import UserRoute from './routes/user.route.js';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/users', UserRoute);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
})