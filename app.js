const montaQuery = require('./montaQuery');

const mysqlConnection = require('./mysql/mysql');
const sqliteConnection = require('./sqlite/sqlite');
const postgresConnection = require('./postgres/postgres')

const fields = ["nome"];
const values = ["Lingua Portuguesa"];

let querySelect = montaQuery.select("curso");
let queryInsert = montaQuery.insert("curso", fields, values);
let queryDelete = montaQuery.remove("curso", "id=1");
let queryUpdate = montaQuery.update("curso", ["nome='SQLITE'"], "id=11")

//SELECT
sqliteConnection.selectSQLite(querySelect);
mysqlConnection.selectMysql(querySelect);
postgresConnection.selectPostgres(querySelect);

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


