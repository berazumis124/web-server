var express = require('express');
var app = express();

app.get ('/yeah', function (req, res){
    res.send('Yeah!!! It\'s running!');
});

app.listen(4998);