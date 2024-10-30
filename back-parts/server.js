const express = require('express')
const dotenv = require('dotenv')

dotenv.config();

const app = express();
const port = process.env.PORT || 5000


app.use('/api/goals', require('./routes/goalRoutes.js'))

app.listen(4000, () => {
    console.log(`Server started on port ${port}`)
})

