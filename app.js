var express = require('express');
var bodyParser = require('body-parser');

var app = express();


var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use('/css', express.static('css'));
app.use('/fonts', express.static('fonts'));
app.use('/images', express.static('images'));
app.use('/js', express.static('js'));
app.use('/slick', express.static('slick'));

 
app.get("/", urlencodedParser, function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.post("/index", urlencodedParser, function (req, res) {
    if(!req.body) return res.sendStatus(400);
    console.log(req.body);
    var finend = (req.body);
    console.log("Ниже будет переменная");
    console.log(finend);
    res.send(`${req.body.userText}`);
});
  

app.listen(3000);


