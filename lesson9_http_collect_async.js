var http = require('http');

var count = 0;
var data = [];
for (var index = 2; index < process.argv.length; index++) {
    getData(index);
}

function getData(urlIndex) {
    http.get(process.argv[urlIndex], function(response) {
        response.setEncoding('utf8');
        var chunks = '';
        response.on('data', function(data) {
            chunks = chunks.concat(data);
        });
        response.on('end', function() {
            data[urlIndex] = chunks;
            if (count === 2) {
                console.log(data[2]);
                console.log(data[3]);
                console.log(data[4]);
            } else {
                count += 1;
            }
        });
    });
}
