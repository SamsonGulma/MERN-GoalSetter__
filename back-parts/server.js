import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000

app.get("/api/goals", (requests, responds) => {
    responds.status(200).json({message: "Welcome to the Uncle Sam App"})
});

app.listen(4000, () => {
    console.log(`Server started on port ${port}`)
})

