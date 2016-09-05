var express = require('express');

var app = express();
var port = 3000;

app.use(express.static(__dirname + '/angular'));

//catches ctrl+c event
process.on('SIGINT', function(){
  console.log("Stop webserver");
});

app.listen(port);
console.log("Server listening on port " + port);
