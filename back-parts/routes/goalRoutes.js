import express from express


const router = express.Router()


router.get("/api/goals", (requests, responds) => {
    responds.status(200).json({message: "Welcome to the Uncle Sam App"})
});



module.exports = router