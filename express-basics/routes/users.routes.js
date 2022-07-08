const express = require('express');


//Controllers
const {
  getAllUsers,
  createUser,
  getUserbyId,
  updateUser,
  deleteUser
} = require('../controllers/user.controller');

// Middlewares

const {
  createUserValidators,
} = require('../middlewares/validator.middleware');

const { userExists } = require('../middlewares/users.middleware.js')


//Models
const { User } = require('../models/user.model')

const usersRouter = express.Router();

usersRouter.get("/", getAllUsers);

usersRouter.post("/", createUserValidators, createUser);

usersRouter.get("/:id",userExists, getUserbyId);

usersRouter.patch("/:id",userExists, updateUser); // next ();

usersRouter.delete('/:id',userExists, deleteUser);

module.exports = { usersRouter }; 