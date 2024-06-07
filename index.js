import express from 'express';
import Connection from './database/db.js'; // Ensure the path to db.js is correct
import dotenv from 'dotenv'

const app = express();

dotenv.config();

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});

const user = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD


Connection(user,password);
