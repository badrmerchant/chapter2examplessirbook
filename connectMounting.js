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

var goodbyeWorld = function (req, res, next) {
    res.setHeader('content-type', 'text/plain');
    res.end('Goodbye World');
}
app.use(logger);
app.use('/hello', helloWorld);
app.use('/goodbye', goodbyeWorld);
app.listen(9000);
console.log('Server running at http://localhost:9000');