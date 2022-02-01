var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("VENTAS-MONGODB-2022");
    var myquery= {  NOMBRE : "Libro6"};
    dbo.collection("LIBRO").deleteOne(myquery, function(err, obj){
        if (err) throw err;
        console.log("1 document deleted");
        db.close();
    });
});