var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("VENTAS-MONGODB-2022");
    dbo.createCollection("LIBRO", function (err, res) {
        if (err) throw err;
        console.log("Collection Created!");
        db.close();
    });
});