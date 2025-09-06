import express from 'express';
import dotenv from 'dotenv';
import {Pool} from 'pg';
 
dotenv.config();
const app = express();
app.use(express.json());

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,() =>{
    console.log("Port running on " + PORT)
});