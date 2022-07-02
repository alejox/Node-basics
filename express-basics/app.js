const express = require("express");

// Routers
const {usersRouter} = require('./routes/users.routes');
const {postsRouter} = require('./routes/posts.routes');

//Utils
const {db} = require('./utils/database.util');

//Init express app
const app = express();

//Read JSON dates
app.use(express.json());

//Define endpoints
// http://localhost:4000/users
app.use('/users',usersRouter);
app.use('/posts', postsRouter);

db.authenticate()
.then(()=> console.log('Db autehticated'))
.catch(err => console.log(err));

db.sync()
.then(()=> console.log('Db Synced'))
.catch(err => console.log(err));

app.listen(4000, () => {
  console.log("Express app running!!!");
});
