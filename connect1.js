/**
 * Created by Badar on 11/14/2014.
 */
var connect = require('connect');
var app = connect();

var helloWorld = function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello Connect Server")
};
app.use(helloWorld);
app.listen(5000);
console.log("badar ahmed sheikh");