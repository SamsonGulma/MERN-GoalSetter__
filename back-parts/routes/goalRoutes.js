const express = require("express");
const router = express.Router();
const { getGoals, setGoals, updateGoal, deleteGoal } = require('../controllers/goalController');

router.route('/').get(getGoals)
router.route('/').post(setGoals)
router.route("/:id").put(updateGoal)
router.route('/:id').delete(deleteGoal)


module.exports = router