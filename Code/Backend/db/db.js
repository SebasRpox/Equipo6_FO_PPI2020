const mysql = require("mysql");
const mysqlConnection = mysql.createConnection({
    host: "beekzlxbkr6kh6v5cg2l-mysql.services.clever-cloud.com",
    user: "ukhjv7zo544vjqfy",
    password: "WTwIt4kOoHpt5hdNhMRZ",
    database: "beekzlxbkr6kh6v5cg2l",
    multipleStatements:true
});

mysqlConnection.connect(function (err) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log("Base de datos conectada!");
    }
});

module.exports = mysqlConnection;