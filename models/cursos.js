const listCursos = require("../database/cursos.json");
const fs = require('fs');
const path = require('path');

function getlistCursos() {
    return listCursos;
};

function insertCurso(id,titulo, descricao, professor){
    const novoCurso = {
        id: id,
        titulo: titulo,
        descricao: descricao,
        professor: professor
    };

listCursos.push(novoCurso);

fs.writeFileSync(
    path.resolve("database", "cursos.json"),
    JSON.stringify(listCursos)
);

return novoCurso;
}

function deleteCurso(id){
    const excluiCurso = {
        id: id,
    };

listCursos.find(excluiCurso);

}

module.exports = { getlistCursos, insertCurso, deleteCurso };

