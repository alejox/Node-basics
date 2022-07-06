const express = require("express");

// Routers
const { usersRouter } = require('./routes/users.routes');
const { postsRouter } = require('./routes/posts.routes');


//Init express app
const app = express();

//Read JSON dates
app.use(express.json());

//Define endpoints
// /api/v1/registrations 
// http://localhost:4000/users
app.use('/users', usersRouter); //next(error)
app.use('/posts', postsRouter);

//Global error handler
app.use('*', (err, req, res, next) => {
  res.status(500).json({
    status: 'fail',
    message:'...',
    error: err,
  });
});


module.exports = { app }