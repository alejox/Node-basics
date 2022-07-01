const { Sequelize, DataTypes } = require('sequelize');

//Conect to database
const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'pass1234',
  port: 5432,
  database: 'DB'
});

module.exports = { db, DataTypes}