const listCursos = require("../database/cursos.json");
const fs = require('fs');
const path = require('path');
const { randomUUID } = require('crypto');

function getlistCursos() {
    return listCursos;
};

function insertCurso(id,titulo, descricao, professor){
    const novoCurso = {
        id: randomUUID(),
        titulo: titulo,
        descricao: descricao,
        professor: professor
    };
    cursoOK()
listCursos.push(novoCurso);

return novoCurso;
}
function cursoOK(){ 
    fs.writeFileSync(
        path.resolve("database", "cursos.json"),
        JSON.stringify(listCursos)
    );
}


function excluiCurso(id) {
    const cursosIndex = listCursos.findIndex(cursos => cursos.id === id);
    listCursos.splice(cursosIndex, 1);
    cursoOK()
}

function atualizaCurso(id) {
    const cursosIndex = listCursos.findIndex(cursos => cursos.id === id);
    listCursos.splice(cursosIndex, 1);
    cursoOK() //manutenção
}

module.exports = { getlistCursos, insertCurso, excluiCurso, atualizaCurso};

