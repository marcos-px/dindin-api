const express = require('express');
const routes = require('./routes');
const PORT = process.env.PORT || 8000;
const server = express();

server.use(express.json());
server.use(routes);

server.listen(PORT, ()=> console.log("Servidor rodando na porta:" + PORT))