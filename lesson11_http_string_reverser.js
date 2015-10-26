var fs = require('fs');
var http = require('http');

var serverPort = Number(process.argv[2]);
var fileName = process.argv[3]

var handleRequest = function(request, response) {
	//console.log('what');
	response.writeHead(200, {'content-type' : 'text/plain'})
	fs.createReadStream(fileName).pipe(response);
};

var server = http.createServer(handleRequest);
server.listen(serverPort);























function reverseString( data ) {
	var reversed = '';
	for(var index = data.length; index >= 0; index--) {
		reversed = reversed.concat(data.charAt(index));
	}
	return reversed;
}


