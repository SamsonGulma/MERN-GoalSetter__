const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel.js');
const { request } = require('express');

const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
            res.status(200).json(goals);
    }
);



const setGoals = asyncHandler(async (req, res) => {
     if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field; the text field value is empty.')
     }
    const goal = await Goal.create({
        text: req.body.text,
    })
    res.status(200).json(goal)
});



const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        
    })

    res.status(200).json(updatedGoal)
});



const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findByIdAndDelete(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    res.status(200).json({ id: req.params.id })
});

module.exports = {
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal,
};