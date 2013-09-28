var net = require('net');

var server = net.createServer(function (socket) {
	
	socket.write('test');

});

server.listen(8000);