const { app } = require('./app')

//Utils
const { db } = require('./utils/database.util');

db.authenticate()
  .then(() => console.log('Db autehticated'))
  .catch(err => console.log(err));

db.sync()
  .then(() => console.log('Db Synced'))
  .catch(err => console.log(err));

app.listen(4000, () => {
  console.log("Express app running!!!");
});