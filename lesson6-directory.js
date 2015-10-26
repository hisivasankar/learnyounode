var fs = require('fs');
var path = require('path');

var Directory = function() {

};
Directory.prototype.listDir = function(directoryPath, filter, callback) {
    fs.readdir(path.normalize(directoryPath), function(err, data) {
        var files = [];
        if (err) {
            return callback(err);
        } else {
            data.forEach(function(file) {
                if (path.extname(file) === '.' + filter) {
                    files.push(file);
                }
            });
            callback(null, files);
        }
    });
};

var directory = new Directory();
module.exports = directory.listDir;
