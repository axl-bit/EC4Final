var mysql = require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "VENTAS_MYSQL_2022"
});

con.connect(function(err){
    if(err) throw err;
    console.log("connected");

    var sql = "update USUARIO set NOMBRE= 'Francisco', APELLIDO='montenegro', EDAD= 16 ,  CELULAR='123456789', CORREO='Francisco@gmail.com' where ID_USUARIO = 1";
    con.query(sql, function(err, result){
        if (err) throw err;
        console.log("1 record update");
    });
});