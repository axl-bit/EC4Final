var mysql = require("mysql");
const Connection = require("mysql/lib/Connection");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "VENTAS_MYSQL_2022"
});

con.connect(function(err){
    if(err) throw err;
    console.log("connected");
})

con.query('select * from usuario', (err, rows) =>{
    if(err) throw err;
    console.log('Los datos de la tabal usuario son:')
    console.log(rows)
})
