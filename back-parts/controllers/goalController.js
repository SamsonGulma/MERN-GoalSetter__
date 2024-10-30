const getGoals = (requests, responds) => {
    responds.status(200).json({ 'message': 'Get Goals' })
};

const setGoals = (requests, responds) => {
    responds.status(200).json({ 'message': 'Set Goal' })
};

const updateGoal = (requests, responds) => {
    responds.status(200).json({ 'message': `Update Goal ${requests.param.id}` })
};

const deleteGoal = (requests, responds) => {
    responds.status(200).json({ 'message': `Delete Goal ${requests.param.id}` })
};

module.exports = {
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal
};