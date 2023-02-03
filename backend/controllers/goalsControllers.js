const asyncHandler = require('express-async-handler')

const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'get from controller' });
})

const setGoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error('Please enter text field');
    };
    res.status(200).json({ message: 'set from controller' });
})

const putGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `put Goals controller ${req.params.id}` })
})

const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `delete Goals controller ${req.params.id}` })
})

module.exports = {
    getGoals,
    setGoals,
    putGoals,
    deleteGoals
};