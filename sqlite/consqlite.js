const sqlite3 = require('sqlite3');

const con = new sqlite3.Database('./database.sqlite');


module.exports = con;