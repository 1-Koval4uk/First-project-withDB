const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require("mongodb").MongoClient;
const app = express();

const url = "mongodb://localhost:27017/";
const MongoClient = new MongoClient(url, { useNewUrlParser: true });
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
     console.log(req.body);
     var users = req.body;

     db2.connect(function(err, client){
       const db = client.db('test');
       const collection = db.collection('users');
            collection.insertOne(users, function(err, results){

              if(err){
                return console.log(err);
              }
              console.log(result.ops);
              //res.send(users);
              client.close()
            });
    console.log(users)
      });
    res.send(`$(req.body.userText)`);
});

res.send(`$(req.body.userText)`);








//get the text from the form
// app.post("/index", urlencodedParser, function (req, res) {
//     if(!req.body) return res.sendStatus(400);
//     console.log(req.body);
//     var finend = (req.body);
//     console.log("Ниже будет переменная");
//     console.log(finend);
//     res.send(`${req.body.userText}`);
// });
  

app.listen(3000);


