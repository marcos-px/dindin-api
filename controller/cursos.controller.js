const cursosModel = require("../models/cursos");

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

    delete: (req,res)=>{
        const {id, titulo, descricao, professor} = req.body;
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.send("Deletado com sucesso");
        const deletaCurso = cursosModel.ex(id, titulo, descricao, professor);

        res.status(204).json(deletaCurso);

    }
}

module.exports = cursosController;