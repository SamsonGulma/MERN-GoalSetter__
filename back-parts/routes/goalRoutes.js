const express = require("express")


const router = express.Router()


router.get("/", (requests, responds) => {
    responds.status(200).json({message: "Welcome to the Uncle Sam App"})
});



module.exports = router