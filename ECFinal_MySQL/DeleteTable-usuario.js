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
2
    var sql = "delete from USUARIO where ID_USUARIO = 3";
    con.query(sql, function(err, result){
        if (err) throw err;
        console.log("1 record deleted");
    });
});