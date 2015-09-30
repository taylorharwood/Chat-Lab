var socket = io();
console.log(socket);

socket.on('send-message', function(data){
  console.log(data);
  sendMessage(data['message'], data['name'], data['time']);
});
socket.on('clear-display', function(){
  clearMessages();
});

var submit = document.getElementById('send');

submit.addEventListener('click', function(evt){
  var time = new Date().toLocaleString();

  socket.emit('send-message', {name: document.getElementById('name').value.trim(), message: document.getElementById('message').value.trim(), time: time});
});

function sendMessage(message, name, time) {
  // var message = document.getElementById('message').value.trim();
  $('#chat-stream').append("<li><b>" + name + "</b>: " + message + " (" + time + ")</li>");
  return message;
}

function clearMessages() {
  $('#chat-stream').html("");
}
