const expres = require("express");

//Datos Dummy
const users = [
  {
    id: 1,
    name: "Max",
  },
  {
    id: 2,
    name: "Alejandro",
  },
  {
    id: 3,
    name: "Fernando",
  },
];

const posts = [
  {
    id: 1,
    title: "Post #1",
  },
  {
    id: 2,
    title: "Post #2",
  },
  {
    id: 3,
    title: "Post #3",
  },
];

//Init express app
const app = expres();

//Read JSON dates
app.use(expres.json());

//Define endpoints
app.get('/users', (req, res)=>{
	//Process the request(Return the list of users)
	res.status(200).json({
		status:'success',
		users,
	});
});

app.post('/users', (req, res)=>{
	const {name} = req.body;

	const newUser ={
		id:Math.floor(Math.random() * 1000),
		name,
	}

	users.push(newUser);
	res.status(201).json({
	status:"success",
	newUser
});
});

app.get('/posts', (req,res) =>{
	res.status(200).json({
		status:"success",
		posts
	});
});

app.post('/posts', (req,res)=>{
	const {title} = req.body;

	const newPost ={
		id:Math.floor(Math.random() * 1000),
		title,
	}

	posts.push(newPost);
	res.status(201).json({
		status:"success",
		newPost
	})
})

app.listen(4000, () => {
  console.log("Express app running!!!");
});
