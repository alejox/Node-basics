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
} = require('../middlewares/validator.middleware')


//Models
const { User } = require('../models/user.model')

const usersRouter = express.Router();

usersRouter.get("/", getAllUsers);

usersRouter.post("/",createUserValidators, createUser);

usersRouter.get("/:id", getUserbyId);

usersRouter.patch("/:id", updateUser); // next ();

usersRouter.delete('/:id', deleteUser);

module.exports = { usersRouter }; 