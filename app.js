const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require("mongodb").MongoClient;
const app = express();

const url = "mongodb://localhost:27017/";
const db2 = new MongoClient(url, { useNewUrlParser: true });
const urlencodedParser = bodyParser.urlencoded({ extended: false })


//Enter the static files
app.use('/css', express.static('css'));
app.use('/fonts', express.static('fonts'));
app.use('/images', express.static('images'));
app.use('/js', express.static('js'));
app.use('/slick', express.static('slick'));

 
app.get("/", urlencodedParser, function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/index", urlencodedParser, function (req, res){
     if(!req.body) return res.status(400);
     

     db2.connect(function(err, client){
       const db = client.db('test');
       const collection = db.collection('users');
            collection.insertOne(req.body, function(err, results){
              if(err){
                return console.log(err);
              }
              res.status(200).send(req.body.userText);
              console.log(req.body);
              client.close()
            });
      });
});



app.listen(80);





//get the text from the form
// app.post("/index", urlencodedParser, function (req, res) {
//     if(!req.body) return res.sendStatus(400);
//     console.log(req.body);
//     var finend = (req.body);
//     console.log("Ниже будет переменная");
//     console.log(finend);
//     res.send(`${req.body.userText}`);
// });