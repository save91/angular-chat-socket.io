var express = require('express');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 3000;

app.use(express.static(__dirname + '/angular'));

io.on('connection', function(socket){
  console.log('a user connected');
});

//catches ctrl+c event
process.on('SIGINT', function(){
  console.log("Stop webserver");
});

http.listen(port, function(){
  console.log("Server listening on port " + port);
});
