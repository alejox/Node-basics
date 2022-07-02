const express = require('express');



//Controllers
const {getAllUsers, createUser} = require('../controllers/user.controller')

//Models
const { User } = require('../models/user.model')

const usersRouter = express.Router()


usersRouter.get("/", getAllUsers);

usersRouter.post("/", createUser);

module.exports = { usersRouter }