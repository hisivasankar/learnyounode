var fs = require('fs');
var path = require('path');

var directory = process.argv[2];
var fileExtensionFilter = '.' + process.argv[3];

fs.readdir(directory, function(err, list) {
    if (err) {
        console.error(err);
        return err;
    } else {
        list.forEach(function(file) {
            if (path.extname(file) === fileExtensionFilter) {
                console.log(file);
            }
        });
    }
});
