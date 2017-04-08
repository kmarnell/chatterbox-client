// YOUR CODE HERE:
$( document ).ready(function() {
	$('.username').on('click', function() {
		app.handleUsernameClick();
	});
       
 });




var app = {
	server: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages'
};

app.init = function() {

};

app.send = function(message) {
  $.ajax({
	  // This is the url you should use to communicate with the parse API server.
	  url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
	  type: 'POST',
	  data: JSON.stringify(message),
	  contentType: 'application/json',
	  success: function (data) {
	    console.log('chatterbox: Message sent');
	  },
	  error: function (data) {
	    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
	    console.error('chatterbox: Failed to send message', data);
	  }
	});
};

app.fetch = function() {
  $.ajax({
	  // This is the url you should use to communicate with the parse API server.
	  url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
	  type: 'GET',
	  data: JSON.stringify(message),
	  contentType: 'application/json',
	  success: function (data) {
	    console.log('chatterbox: Message sent');
	  },
	  error: function (data) {
	    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
	    console.error('chatterbox: Failed to send message', data);
	  }
	});

};


app.clearMessages = function() {
	$('#chats').empty();
};

app.renderMessage = function(message) {
	$('#chats').prepend(
		'<div>' +
			'<div class="username">' + message.username + '</div>' +
			'<div>' + message.text + '</div>' +
			'<div class="roomSelect">' + message.roomname + '</div>' +
		'</div>')
};

app.renderRoom = function(roomname) {
	$('#roomSelect').append('<li>'+ roomname +'</li>');

};

	


app.handleUsernameClick = function(username) {
	//they are calling a click event and we need to write code to handle the event;

	
};


app.handleSubmit = function(message) {
	app.send(message);
	app.renderMessage(message);
};


















