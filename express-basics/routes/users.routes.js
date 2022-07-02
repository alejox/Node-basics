const express = require('express');



//Controllers
const {getAllUsers, createUser, getUserbyId, updateUser, deleteUser} = require('../controllers/user.controller')

//Models
const { User } = require('../models/user.model')

const usersRouter = express.Router()


usersRouter.get("/", getAllUsers);

usersRouter.post("/", createUser);

usersRouter.get("/:id", getUserbyId);

usersRouter.patch("/:id", updateUser);

usersRouter.delete('/:id', deleteUser);

module.exports = { usersRouter }