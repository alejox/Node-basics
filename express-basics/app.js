const expres = require('express');

//Init express app

const app = expres();

app.listen(4000, ()=>{
	console.log('Express app running!!!');
});