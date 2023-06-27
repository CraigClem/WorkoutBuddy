const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

const getAllWorkouts = async (req, res) => {
    const workouts = await Workout.find().sort({createdAt: -1})
    res.status(200).json(workouts)
    return
}

// id is pulled from the request object
const getSingleWorkout = async (req, res) => {
    // get if from request params
    const { id } = req.params
    // check to see if id is a mongodb/mongoose format
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: ' no such workout'}) 
    }
    const workout = await Workout.findById(id)

    if(!workout) {
        return res.status(400).json({error: 'id unknown'})
    }
    res.status(200).json(workout, 'deleted')
    return
}

const createWorkout = async (req, res) => {
    const { title, reps, load } = req.body
    try {
        if (!title || !reps || !load) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        const workout = await Workout.create({ title, reps, load })
        res.status(200).json(workout)
        return
    } catch (error) {
        console.log(error)
        res.status(404).json({ error: error.message })
    }
    res.json({ message: 'POST a single workout' })
    return
}

const deleteWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: ' no such workout id' })
    }
    const workout = await Workout.findOneAndDelete({_id: id })
    if (!workout) {
        return res.status(404).json({ error: 'id unknown' })
    }
    res.status(200).json({workout})
    return 
}

const updateWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: ' no such workout id' })
    }
    const workout = await Workout.findOneAndUpdate({ _id: id}, {
    ...req.body
    })
    if (!workout) {
        return res.status(404).json({ error: 'id unknown' })
    }
    res.status(200).json({ workout })
    return
}

module.exports = {
    createWorkout,
    getAllWorkouts,
    getSingleWorkout,
    deleteWorkout,
    updateWorkout
}