const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel.js');
const { request } = require('express');

const getGoals = asyncHandler(async (requests, responds) => {
    const goals = await Goal.find()

    if (!requests.body.text) {
        responds.status(400)
        throw new Error('Please add a text field; the text field value is empty.')
    }
    else {
        console.log(requests.body)
        responds.status(200).json(goals);
    }
});

const setGoal = asyncHandler(async (requests, responds) => {
     if (!requests.body.text) {
        responds.status(400)
        throw new Error('Please add a text field; the text field value is empty.')
     }
    const goal = await Goal.create({
        text: requests.body.text,
    })
    responds.status(200).json(goal)
});

const updateGoal = asyncHandler(async (requests, responds) => {
    responds.status(200).json({ 'message': `Update Goal ${requests.params.id}` })
});

const deleteGoal = asyncHandler(async (requests, responds) => {
    responds.status(200).json({ 'message': `Delete Goal ${requests.params.id}` })
});

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
};