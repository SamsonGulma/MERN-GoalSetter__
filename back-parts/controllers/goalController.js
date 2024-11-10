const asyncHandler = require('express-async-handler')

const getGoals = asyncHandler(async (requests, responds) => {
    if (!requests.body.text) {
        responds.status(400)
        throw new Error('Please add a text field; the text field value is empty.')
    }
    else {
        console.log(requests.body)
        responds.status(200).json({ 'message': 'Get Goals' });
    }
});

const setGoals = asyncHandler(async (requests, responds) => {
    responds.status(200).json({ 'message': 'Set Goal' })
});

const updateGoal = asyncHandler(async (requests, responds) => {
    responds.status(200).json({ 'message': `Update Goal ${requests.params.id}` })
});

const deleteGoal = asyncHandler(async (requests, responds) => {
    responds.status(200).json({ 'message': `Delete Goal ${requests.params.id}` })
});

module.exports = {
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal,
};