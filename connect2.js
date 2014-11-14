/**
 * Created by Badar on 11/14/2014.
 */
var connect = require('connect');
var app = connect();

var logger = function (req, res, next) {
    console.log(req.method, req.url);
    next();
};
var helloWorld = function (req, res, next) {

    res.setHeader('content-Type', 'text/plain');
    res.end('middle ware');

};
app.use(logger);
app.use(helloWorld);
app.listen(5000);
console.log('hello');