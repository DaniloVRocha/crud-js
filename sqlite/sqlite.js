const con = require('./consqlite');

function selectSQLite(query){
    con.all(query, (error, rows) => {
        console.log(`O resultado da query SQLITE ${query} é: \n`);
        console.log(rows);
        con.close();
    })
}
function insertSQLite(query){
    con.run(query, (erro) => {
        if(erro){
            console.log(erro)
        }
        console.log(`o comando ${query}, foi executado com sucesso.`)
    })
}

function removeSQLite(query){
    con.run(query, (erro) => {
        if(erro){
            console.log(erro)
        }
        console.log(`o comando ${query}, foi executado com sucesso.`)
    })
}
function updateSQLite(query){
    con.run(query, (erro) => {
        if(erro){
            console.log(erro)
        }
        console.log(`o comando ${query}, foi executado com sucesso.`)
    })
}

module.exports = {
    selectSQLite,
    insertSQLite,
    updateSQLite,
    removeSQLite
};
