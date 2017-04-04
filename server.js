var express = require('express');
var app = express();
var PORT = process.env.PORT || 4998;

app.get ('/yeah', function (req, res){
    res.send('Yeah!!! It\'s running!');
});

app.use(express.static(__dirname + '/public/'));
//console.log(__dirname + '/public');
app.listen(PORT);