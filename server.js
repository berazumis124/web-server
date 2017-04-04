var express = require('express');
var app = express();
var PORt = process.env.PORT || 4998;

app.get ('/yeah', function (req, res){
    res.send('Yeah!!! It\'s running!');
});

app.listen(PORT);