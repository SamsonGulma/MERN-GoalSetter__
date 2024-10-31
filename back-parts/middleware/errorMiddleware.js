const { stack } = require("../routes/goalRoutes")

const errorHandler = (err, requests, responds, next) => {
    const statusCode = responds.statusCode ? responds.statusCode : 500

    responds.status(statusCode)

    responds.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    })
}

module.exports = {
    errorHandler,
}