const montaQuery = require('./montaQuery');
const con = require('./sqlite/consqlite');
//const con = require('./mysql/conMySQL');
const mysqlConnection = require('./mysql/mysql');
const express = require('express');

const app = express();
app.use(express.json());

app.get('/cursos', (req, res) => {
    con.all(montaQuery.select("curso") ,(err, rows) => {
        res.json(rows);
    })
})


app.get('/cursos/:id', (req, res) => {
    let query = montaQuery.select("curso", "*", `id=${req.params.id}`);
    con.query(query, (err, rows) => {
        console.log(`O resultado da query ${query} é: \n`);
        res.json(rows);
    })
})

app.post("/cursos", (req, res) => {
    let query = montaQuery.insert("curso", ["nome"], [req.body.nome])
    con.run(query, () =>{
        res.send("Curso inserido com sucesso.")
    })
})

app.delete('/cursos/:id', (req,res) => {
    let query = montaQuery.remove("curso", `id=${req.params.id}`);
    con.query(query, () =>{
        res.send("Curso deletado com sucesso.")
    })
})

app.put('/cursos/:id', (req, res) =>{
    let query = montaQuery.update("curso", [`nome='${req.body.nome}'`], `id=${req.params.id}`);
    con.query(query, ()=>{
        res.send("Usuario Atualizado com sucesso.")
    })
})

app.listen('3000', () =>{
    console.log("Servidor rodando na porta 3000");
})

// const mysqlConnection = require('./mysql/mysql');
// const sqliteConnection = require('./sqlite/sqlite');
// const postgresConnection = require('./postgres/postgres')

// const fields = ["nome"];
// const values = ["Lingua Portuguesa"];

// let querySelect = montaQuery.select("curso");
// let queryInsert = montaQuery.insert("curso", fields, values);
// let queryDelete = montaQuery.remove("curso", "id=1");
// let queryUpdate = montaQuery.update("curso", ["nome='SQLITE'"], "id=11")

// //SELECT
// sqliteConnection.selectSQLite(querySelect);
// mysqlConnection.selectMysql(querySelect);
// postgresConnection.selectPostgres(querySelect);

//INSERT
// sqliteConnection.insertSQLite(queryInsert);
// mysqlConnection.insertMySql(queryInsert);
//postgresConnection.insertPostgres(queryInsert);

//DELETE
//sqliteConnection.removeSQLite(queryDelete);
//mysqlConnection.removeMySql(queryDelete);
//postgresConnection.removePostgres(queryDelete)

//UPDATE
//sqliteConnection.updateSQLite(queryUpdate);
//mysqlConnection.updateMySql(queryUpdate)
//postgresConnection.updatePostgres(queryUpdate)


