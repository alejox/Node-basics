const http = require('http'); //Common JS


//Datos Dummy 
const users = [
  {
    id: 1,
    name: 'Max'
  },
  {
    id: 2,
    name: 'Alejandro'
  },
  {
    id: 3,
    name: 'Fernando'
  }
];

const posts = [
  {
    id: 1,
    title: 'Post #1'
  },
  {
    id: 2,
    title: 'Post #2'
  },
  {
    id: 3,
    title: 'Post #3'
  }
];

const server = http.createServer((req, res) => { //Creación del server
  /*   console.log(req.method); //Verbo HTTP (GET - PUT ...)
    console.log(req.url); //Endpoint - URL */
  const { method, url } = req

  res.setHeader('Content-Type', 'aplication/json');

  if (method === 'GET' && url === '/users') {
    //Retorna la lista de usuarios
    res.write(JSON.stringify(users));
  } else if (method === 'GET' && url === '/posts') {
    //Retorna la lista de posts
    res.write(JSON.stringify(posts));
  } else {
    //No coincide con la url - endpoint
    res.write(JSON.stringify({ message: `${method} ${url} no existe en este servidor` }))
  }
  res.end(); //Indica que la respuesta termino
});


//Puerto localhost
server.listen(4000);