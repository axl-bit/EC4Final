var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("VENTAS-MONGODB-2022");
    var myquery= { NOMBRE: "Libro1"};
    var newvalues = {$set: {NOMBRE:"Libro6"}}
    dbo.collection("LIBRO").updateOne(myquery, newvalues, function(err, res){
        if (err) throw err;
        console.log("1 document updated");
        db.close();
    });
});