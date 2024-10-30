const express = require('express')
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000


app.use('/api/goals', require('./routes/goalRoutes.js'))

app.listen(4000, () => {
    console.log(`Server started on port ${port}`)
})

