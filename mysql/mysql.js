const con = require('./conMySQL');

function selectMysql(query){
    con.query(query ,(err, rows)=>{
        console.log(`O resultado da query ${query} é: \n`);
        console.log(rows);
    })
}
function insertMySql(query){
    con.query(query, (err) => {
        if(err){
            console.log(err)
        }
        console.log(`O comando ${query} foi executado com sucesso.`)
    })
}
function removeMySql(query){
    con.query(query, (err)=>{
        if(err){
            console.log(err)
        }
        console.log(`O comando ${query} foi executado com sucesso.`)
    })
}

function updateMySql(query){
    con.query(query, (err)=>{
        if(err){
            console.log(err)
        }
        console.log(`O comando ${query} foi executado com sucesso.`)
    })
}
module.exports = {
    selectMysql,
    insertMySql,
    updateMySql,
    removeMySql
}