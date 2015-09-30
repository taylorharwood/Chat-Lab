var io = require('socket.io')();

var chatters = {};

// The socket parameter represents a new client connection that comes in.
// Probably one of many.
// io is one server side object representing Socket.io

io.on('connection', function(socket){
  console.log('Client connected to socket.io');

  socket.on('send-message', function(data){
    console.log(data);
    io.emit('send-message', data);
  });

  socket.on('clear-display', function() {
    io.emit('clear-display');
  });

});

module.exports = io;
