const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')
const connectDB = require('./config/db.js')
const { errorHandler } = require('./middleware/errorMiddleware.js');
 
dotenv.config();

const app = express();
const port = process.env.PORT || 5000

connectDB()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goalRoutes.js'))

app.use(errorHandler)

app.listen(4000, () => {
    console.log(`Server started on port ${port}`)
})

