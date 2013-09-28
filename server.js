var net = require('net');

var users = [];

var server = net.createServer(function (socket) {
	
	users.push(socket);

	socket.on('data', function (data) {
		for(var user in users) {
			if(users[user] === socket) continue;
			users[user].write(data);
		}
	});

});

server.listen(8000);