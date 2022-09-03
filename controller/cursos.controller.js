const cursosModel = require("../models/cursos");
const cursosOk = [];

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
        const {id} = req.params.id;
        const deleted = cursosModel.find(cursosModel => cursosModel.id === id)
        if(deleted){
            console.log(deleted)
            cursosOk = cursosOk.filter(cursosModel => cursosModel.id !== id);
            res.status(204).json(deleted);
        }else{
            console.log(deleted);
            res.status(404).json({message: "Conexão falhou!"})
        }
    }
};

module.exports = cursosController;