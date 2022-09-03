const cursosModel = require("../models/cursos");


const cursos = require("../database/cursos.json");

const cursosController={
    lista: (req,res)=>{
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.json(cursosModel.getlistCursos());
    },

    welcome: (req,res) => {
        res.send("Bem vindo a minha primeira API :-)");
    },

    insert: (req, res)=> {
        const {id, titulo, descricao, professor} = req.body;
        res.setHeader("Access-Control-Allow-Origin", "*");
        const novoCurso = cursosModel.insertCurso(id, titulo, descricao,professor);

        res.status(204).json(novoCurso);
    },


    delete: (req,res) => {
    const { id } = req.params;
    const cursosIndex = cursos.findIndex(cursos => cursos.id === id);

    cursos.splice(cursosIndex, 1);

    return res.status(204).send(console.log("Deletado com sucesso!"));
    
}};


module.exports = cursosController;