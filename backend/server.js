const dotenv = require('dotenv').config();
const mongoose = require('mongoose')
const cors = require('cors');
const express = require('express');
const workoutRoutes = require('./routes/workouts')

const errorHandler = require('./middleware/errorHandler')


//? express app
const app = express()
//? React CORS issue resolve?
app.use(cors());

//? allows access to request body
app.use(express.json())

//? middleware logging url path and type of request (GET etc)
app.use((req, res, next) => {
    console.log('path:', req.path, req.method, 'request')
    next()
})

app.use(errorHandler)

//? Routes imported from workouts.js
app.use('/api/workouts', workoutRoutes)

//?Connect to db with mongoose
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //? Listen for requests once connected to db
        app.listen(process.env.PORT, () => {
            console.log('connect to db & listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })


