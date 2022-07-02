//Models
const { User } = require("../models/user.model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    //Process the request(Return the list of users)
    res.status(200).json({
      status: "success",
      users,
    });
  } catch (err) {
    console.log(err);
  }
};

const createUser = async (req, res) => {
  try {
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
  } catch (err) {
    console.log(err);
  }
};

const getUserbyId = async (req, res) => {
  const { id } = req.params;

  const user = await User.findOne({ where: { id } });
  if (!user) {
    return req.status(404).json({
      status: "error",
      message: "User not found",
    });
  }

  res.status(200).json({
    status: "success",
    user,
  });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const user = await User.findOne({ where: { id } });
  if (!user) {
    return req.status(404).json({
      status: "error",
      message: "User not found",
    });
  }

  await user.update({ name });

  res.status(204).json({
    status: "success",
  });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findOne({ where: { id } });
  if (!user) {
    return req.status(404).json({
      status: "error",
      message: "User not found",
    });
  }

  //await user.destroy();

  await user.update({status:'deleted'});
  res.status(204).json({
    status: "success",
  });
};

module.exports = {
  getAllUsers,
  createUser,
  getUserbyId,
  updateUser,
  deleteUser,
};
