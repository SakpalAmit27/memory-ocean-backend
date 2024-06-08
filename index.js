import express from 'express';
import Connection from './database/db.js'; // Ensure the path to db.js is correct
import dotenv from 'dotenv'
import router from './routes/route.js';

const app = express();

dotenv.config();

app.use('/',router) 

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});

const user = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD


Connection(user,password);
