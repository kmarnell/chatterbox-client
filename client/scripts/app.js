// YOUR CODE HERE:
$(document ).ready(function() {
	$(this).on('click', '.username', function(event) {
		app.handleUsernameClick(this);
	});

	$('.submit').on('submit', function(event) {
		app.handleSubmit();
	});

	$(this).on('change', '.room', function(event) {
		app.renderRoom(this);
	});

	$(this).on('click', '.username', function(event) {
		//show all messages from that user in bold
		app.handleUsernameClick(this);
		for(var i = 0; i < friends.length; i++) {
			if(friends[i]) {
				$('#chats').children(this).each(function() {
					$('.messageText').css("font-weight", "bold")
				})
		}
	}
		
	}) 



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
	  data: {order: '-createdAt'},
	  contentType: 'application/json',
	  success: function (data) {
	   //iterate over array of message
	   for(var i = 0; i < data.results.length; i++) {
	   //call renderMessage to each message
	   	app.renderMessage(data.results[i]);
	  //render already created rooms
	  	app.renderRoom(data.results[i].roomname);
	   	}

	  },
	  error: function (data) {
	    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
	    console.error('chatterbox: Unable to retrieve messages', data);
	  }
	});

};


app.clearMessages = function() {
	$('#chats').empty();
};

app.renderMessage = function(message, roomname) {
//if the room selected from the dropname matches the message.roomname 
	//render messages of that particular room

	$('#chats').prepend(
		'<div>' +
			'<div class="username">' + app.escapeHtml(message.username)  + ': ' +'</div><div class="messageText">' + app.escapeHtml(message.text) + '</div>' +
			//'<div class="room">' + message.roomname + '</div>' +
		'</div>')
};

app.renderRoom = function(roomname) {
	$('#roomSelect').append('<option class="room">'+ roomname +'</option>');
};

	

var friends =  [];
app.handleUsernameClick = function(username) {
  friends.push(username);
	
};


app.handleSubmit = function(message) {
	app.renderMessage(message.text);


};

var entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

app.escapeHtml = function(string) {
  return String(string).replace(/[&<>"'`=\/]/g, function (s) {
    return entityMap[s];
  });
}







