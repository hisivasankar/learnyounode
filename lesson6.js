var directory = require('./lesson6-directory');
var directoryName = process.argv[2];
var filters = process.argv[3];

directory(directoryName, filters, function (err, files) {
    if (err) {
        console.error(err);
    } else {
        files.forEach(function(file) {
            console.log(file);
        });
    }
});
