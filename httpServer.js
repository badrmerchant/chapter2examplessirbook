/**
 * Created by Badar on 11/14/2014.
 */
var http = require('http');

http.createServer(function (req, res) {
    res.writeHeader(200, {'Content-Type': 'text/plain'});

    res.end('hello HttpServer');

}).listen('8000');
console.log("server console");