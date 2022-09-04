const express = require('express');
const cursosController = require('../controller/cursos.controller');
const database = require('../database/cursos.json');
const routes = express.Router();

routes.get("/", cursosController.welcome);
routes.get("/lista-cursos", cursosController.lista);

routes.post("/cursos", cursosController.insert);

routes.delete("/deleta-cursos/:id", cursosController.delete);
routes.put("/atualizar-cursos/:id", cursosController.put) //manutenção


module.exports = routes;