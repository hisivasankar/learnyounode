var fs = require('fs');

var filename = process.argv[2];
try {
    var fileData = fs.readFileSync(filename, 'utf8').split('\n');
    console.log(fileData.length - 1);
} catch (err) {
    console.error(err);
}
