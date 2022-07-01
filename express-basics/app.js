const express = require("express");

// Routers
const {usersRouter} = require('./routes/users.routes');

//Utils
const {db} = require('./utils/database.util');

//Init express app
const app = express();

//Read JSON dates
app.use(express.json());

//Define endpoints
// http://localhost:4000/users
app.use('/users',usersRouter);

app.get("/posts", (req, res) => {
  res.status(200).json({
    status: "success",
    posts,
  });
});

app.post("/posts", (req, res) => {
  const { title } = req.body;

  const newPost = {
    id: Math.floor(Math.random() * 1000),
    title,
  };

  posts.push(newPost);
  res.status(201).json({
    status: "success",
    newPost,
  });
});

db.authenticate()
.then(()=> console.log('Db autehticated'))
.catch(err => console.log(err));

db.sync()
.then(()=> console.log('Db Synced'))
.catch(err => console.log(err));

app.listen(4000, () => {
  console.log("Express app running!!!");
});
