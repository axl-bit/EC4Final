var mysql = require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "VENTAS_MYSQL_2022"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("conected");

    var sql = "create table USUARIO (ID_USUARIO int auto_increment primary key, NOMBRE varchar(255), APELLIDO varchar(255), EDAD int, CELULAR varchar(255), CORREO varchar(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("table Created USUARIO");
    });
});