var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("VENTAS-MONGODB-2022");
    var myobj = {NOMBRE:"Libro1", AUTOR:"autor1", NUMERO_PÁGINAS:"20", COLOR:"Azul"};
    dbo.collection("LIBRO").insertOne(myobj, function(err, res){
        if(err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("VENTAS-MONGODB-2022");
    var myobj = {NOMBRE:"Libro2", AUTOR:"autor2", NUMERO_PÁGINAS:"20", COLOR:"Rojo"};
    dbo.collection("LIBRO").insertOne(myobj, function(err, res){
        if(err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("VENTAS-MONGODB-2022");
    var myobj = {NOMBRE:"Libro3", AUTOR:"autor3", NUMERO_PÁGINAS:"20", COLOR:"Violeta"};
    dbo.collection("LIBRO").insertOne(myobj, function(err, res){
        if(err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("VENTAS-MONGODB-2022");
    var myobj = {NOMBRE:"Libro4", AUTOR:"autor4", NUMERO_PÁGINAS:"20", COLOR:"Morado"};
    dbo.collection("LIBRO").insertOne(myobj, function(err, res){
        if(err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});