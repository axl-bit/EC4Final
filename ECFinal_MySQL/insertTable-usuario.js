var mysql = require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "VENTAS_MYSQL_2022"
});

/*
con.connect(function (err){
    if (err) throw err;
    console.log("connected");

    var sql = "insert into USUARIO (NOMBRE, APELLIDO, EDAD, CELULAR, CORREO) values ('Juan', 'Perez', 21, '987321456','juan@gmail.com')";
    con.query(sql,function(err, result){
        if(err) throw err;
        console.log("1 record inserted");
    });
});
*/

/*
con.connect(function (err){
    if (err) throw err;
    console.log("connected");

    var sql = "insert into USUARIO (NOMBRE, APELLIDO, EDAD, CELULAR, CORREO) values ('Martin', 'Perez', 45, '123456789','Martin@gmail.com')";
    con.query(sql,function(err, result){
        if(err) throw err;
        console.log("1 record inserted");
    });
});
*/
/*
con.connect(function (err){
    if (err) throw err;
    console.log("connected");

    var sql = "insert into USUARIO (NOMBRE, APELLIDO, EDAD, CELULAR, CORREO) values ('Maria', 'Gonzale', 24, '879312645','Maria@gmail.com')";
    con.query(sql,function(err, result){
        if(err) throw err;
        console.log("1 record inserted");
    });
});
*/

con.connect(function (err){
    if (err) throw err;
    console.log("connected");

    var sql = "insert into USUARIO (NOMBRE, APELLIDO, EDAD, CELULAR, CORREO) values ('Samira', 'Pinedo', 18, '456123987','Samira@gmail.com')";
    con.query(sql,function(err, result){
        if(err) throw err;
        console.log("1 record inserted");
    });
});
