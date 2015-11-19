var http = require('http');
var urlToConnect = process.argv[2];
http.get(urlToConnect, function(response) {
    response.setEncoding('utf8');
    response.on('data', console.log);
    response.on('error', console.error);
});
