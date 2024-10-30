const getGoals = (requests, responds) => {
    responds.status(200).json({ 'message': 'Get Goals' })
    console.log(requests.body)
};

const setGoals = (requests, responds) => {
    responds.status(200).json({ 'message': 'Set Goal' })
};

const updateGoal = (requests, responds) => {
    responds.status(200).json({ 'message': `Update Goal ${requests.params.id}` })
};

const deleteGoal = (requests, responds) => {
    responds.status(200).json({ 'message': `Delete Goal ${requests.params.id}` })
};

module.exports = {
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal
};