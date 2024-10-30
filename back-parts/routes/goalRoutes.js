const express = require("express");
const router = express.Router();
const { getGoals } = require('../controllers/goalController');

router.get("/", getGoals);

router.post("/", (requests, responds) => {
    responds.status(200).json({message: "Set Goal"})
});

router.put("/:id", (requests, responds) => {
    responds.status(200).json({message: `Update Goal ${requests.params.id}`})
});

router.delete("/:id", (requests, responds) => {
    responds.status(200).json({message: `Delete Goal ${requests.params.id}`})
});


module.exports = router