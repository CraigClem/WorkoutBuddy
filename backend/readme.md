BACKEND SETUP - create db and endpoints for crud functionality. 

requirments/packages. 

Node.js - server
Nodemon - auto refresh on change
express.js - for api calls to server
dotenv.- to import .env varibles

Setting up node server: 

package.json add a server command node server.js 

server.js is the main file you run the app from.

in the server.js file we import the packages we need. express and dotenv

import .env variables via dotenv
require('dotenv').config();

import express
const express = require('express');

make express availbale as var
const app = express()

add a listener to app.port

create a path '/' and return a json message.

run node

//? middleware logging url path and type of request (GET etc)
app.use((req, res, next) => {
    console.log('path:', req.path, req.method, 'request')
    next()
})

//? Routes
app.get('/', (req, res) => {
    res.json({message: 'welcome to the app'})
})

//? Listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})

create a routes folder within backend and then create a workouts.js file 

within this file we will create all the end point routes/paths and then export them to be imported in our sever.js file

express Router


set up mongodb
install mongoose


///

setup node server
setup mongodb
setup mongoose

create schemas/models using mongoose

create controllers () = logic functions to be called in our workouts.js api path requests

set routes in server.js = app.use('base_url', workoutRoutes)

workoutRoutes is importd from routes/workouts

test endpoints in postman. 


-------------------------------------------------

FRONTEND SETUP

requirements/packages

Vite
React,
React Router Dom
Material UI



install vite + react in a frontend folder with mernstack folder so we have a frontend and backend folder. 

remove unneeded files etc.

app.js - import BrowserRouter, Routes and Route to define paths to each component/page.




