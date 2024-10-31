const express = require('express')
const dotenv = require('dotenv')
const { errorHandler } = require('./middleware/errorMiddleware.js');
 
dotenv.config();

const app = express();
const port = process.env.PORT || 5000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goalRoutes.js'))

app.use(errorHandler)

app.listen(4000, () => {
    console.log(`Server started on port ${port}`)
})

