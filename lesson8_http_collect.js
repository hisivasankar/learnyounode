var http = require('http');
var urlToConnect = process.argv[2];
//urlToConnect = 'http://www.google.co.in';
var content = "";
http.get(urlToConnect, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
        content = content.concat(data);
    });
    response.on('end', function() {
        console.log(content.length);
        console.log(content);
    })
    response.on('error', console.error);
});
