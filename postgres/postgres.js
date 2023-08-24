const con = require('./conPostgres');

function selectPostgres(query){

    con.query(query, (err, result) => {
        console.log(`O resultado da query ${query} é: \n`);
        console.log(result.rows);
    })

}
function insertPostgres(query){
    con.query(query, (err) => {
        if(err){
            console.log(err)
        }
        console.log(`O comando ${query} foi executado com sucesso.`)
    })
}
function removePostgres(query){
    con.query(query, (err)=>{
        if(err){
            console.log(err)
        }
        console.log(`O comando ${query} foi executado com sucesso.`)
    })
}

function updatePostgres(query){
    con.query(query, (err)=>{
        if(err){
            console.log(err)
        }
        console.log(`O comando ${query} foi executado com sucesso.`)
    })
}

module.exports = {
    insertPostgres,
    selectPostgres,
    updatePostgres,
    removePostgres
}