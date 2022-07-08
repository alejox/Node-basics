//Models
const { User } = require("../models/user.model");

//Utils
const { catchAsync } = require('../utils/catchAsync.util');

//appError
const { AppError } = ('../utils/appError.util.js');

const getAllUsers = catchAsync(async (req, res, next) => {

  const users = await User.findAll();

  res.status(200).json({
    status: "success",
    users,
  });

});

const createUser = catchAsync(async (req, res, next) => {

  const { name, age, email, password } = req.body;

  const newUser = await User.create({
    name,
    age,
    email,
    password,
  });

  res.status(201).json({
    status: "success",
    newUser,
  });

});

const getUserbyId = catchAsync(async (req, res, next) => {

  const { id } = req.params;


  res.status(200).json({
    status: "success",
    user,
  });

});



const updateUser = catchAsync(async (req, res, next) => {

  const { id } = req.params;
  const { name } = req.body;
  
  await user.update({ name });

  res.status(204).json({ status: "success" });
});

const deleteUser = catchAsync(async (req, res, next) => {

  const { id } = req.params;



  await user.update({ status: 'deleted' });
  res.status(204).json({
    status: "success",
  });


});

module.exports = {
  getAllUsers,
  createUser,
  getUserbyId,
  updateUser,
  deleteUser,
};
