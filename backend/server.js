import express from 'express';
import dotenv from 'dotenv';
import {Pool} from 'pg';
// Imports to start the App
import path from 'path';
import { fileURLToPath } from 'url';
// Imports for file pathing
 
// STARTING THE APP
dotenv.config();
const app = express();
app.use(express.json());
// STARTING THE APP

// Connection to DATABASE
const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
})
const PORT = process.env.PORT || 5000;
// Connection to DATABASE


// FILE PATHING TO INDEX.HTML

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/",(req,res) => {
    res.sendFile(path.join)(__dirname, "../frontend/index.html")
});

// FILE PATHING TO INDEX.HTML


app.listen(PORT,() =>{
    console.log("Port running on " + PORT)
});