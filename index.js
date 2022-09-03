const express = require('express');
const routes = require('./routes');

const server = express();

server.use(express.json());
server.use(routes);

server.listen(8000, ()=> console.log("Servidor rodando na porta 8000"))