var mysql = require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
});

//creanis la conexion hacia la base de datos
con.connect(function(err){
    if (err) throw err;
    console.log("conected!");
    
    //creacion de una base de datos 
    con.query("create database VENTAS_MYSQL_2022", function(err, result){
        if(err) throw err;
        console.log("Database created");
    });
});