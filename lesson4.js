var fs = require('fs');

var fileName = process.argv[2];
fs.readFile(fileName, 'utf8', function (err, data) {
    if (err) {
        console.log(err);
        return err;
    } else {
        console.log(data.split('\n').length - 1);
    }
});
