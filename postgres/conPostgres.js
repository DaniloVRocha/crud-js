const {Client} = require('pg');

const con = new Client({
    host:'localhost',
    user: 'postgres',
    password: 'admin',
    database:'meudb'
}) 

con.connect();

module.exports = con;