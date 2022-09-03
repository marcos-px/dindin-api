const express = require('express');
const cursosController = require('../controller/cursos.controller');
const routes = express.Router();

routes.get("/", cursosController.welcome);
routes.get("/lista-cursos", cursosController.lista);

routes.post("/cursos", cursosController.insert);

routes.delete("deleta-cursos/:id", cursosController.delete)

module.exports = routes;