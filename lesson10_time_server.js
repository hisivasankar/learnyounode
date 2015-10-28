var net = require('net');

function fillZero(number) {
    return (number < 10 ? '0' + number : number);
}

function getTime() {
    var date = new Date();
    var message = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + fillZero(date.getDate()) + ' ' + fillZero(date.getHours()) + ':' + fillZero(date.getMinutes());
    return message;
}
var server = net.createServer(function(socket) {

    socket.end(getTime() + '\n');

});
server.listen(Number(process.argv[2]));
