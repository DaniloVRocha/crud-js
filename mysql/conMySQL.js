const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'meudb'
});

con.connect((erro) => {
    if (erro) {
        console.log("Ocorreu um erro ao se conectar com o banco de dados.", erro)
        return;
    }
    console.log("Banco de dados conectado com sucesso.")
})

module.exports = con;