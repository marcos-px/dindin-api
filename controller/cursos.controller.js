const cursosModel = require("../models/cursos");

const cursos = require("../database/cursos.json");
const { patch } = require("../routes");

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
    const cursosIndex = cursosModel.excluiCurso(id);

    return res.status(204).send(console.log("Deletado com sucesso!" + "  " + id));
},

    put: (req,res)=>{
        const { id } = +req.params;
        const body = req.body;
        const cursosIndex = cursosModel.atualizaCurso(id);
        const atualizaCurso = {id:id, ...body};
        cursosModel[cursosIndex] = atualizaCurso;
        console.log(body);
        res.status(204).send(console.log("Atualizado com sucesso!" + id));
    } //manutenção
};


module.exports = cursosController;