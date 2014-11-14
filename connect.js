/*
 var connect = require('connect');
 connect().use(logger).use('/admin',admin).use(hello).listen(3000);

 function logger(req, res, next) {
 console.log('%s %s', req.method, req.url);
 next();
 }
 function hello(req, res,next) {
 res.setHeader('Content-Type', 'text/plain');
 res.end('hello world');
 next();
 }
 function restrict(req, res, next) {
 var authorization = req.headers.authorization;
 if (!authorization) return next(new Error('Unauthorized'));
 var parts = authorization.split(' ');
 var scheme = parts[0];
 var auth = new Buffer(parts[1], 'base64').toString().split(':');
 var user = auth[0];
 var pass = auth[1];
 authenticateWithDatabase(user, pass, function (err) {
 if (err) return next(err);
 next();
 });
 }


 function admin(req, res, next) {
 switch (req.url) {
 case '/':
 res.end('try /users');
 break;
 case '/users':
 res.setHeader('Content-Type', 'application/json');
 res.end(JSON.stringify(['tobi', 'loki', 'jane']));
 break;
 }
 }
 */

var app = require('connect');
var parse = require('url').parse;
module.exports = function route(obj) {
    return function (req, res, next) {
        if (!obj[req.method]) {
            next();
            return;
        }
        var routes = obj[req.method];
        var url = parse(req.url);
        var paths = Object.keys(routes);
        for (var i = 0; i < paths.length; i++) {
            var path = paths[i];
            var fn = routes[path];
            path = path
                .replace(/\//g, '\\/')
                .replace(/:(\w+)/g, '([^\\/]+)');
            var re = new RegExp('^' + path + '$');
            var captures = url.pathname.match(re);
            if (captures) {
                var args = [req, res].concat(captures.slice(1));
                fn.apply(null, args);
                return;
            }
        }
        next();
    }
};
app().use(parse).listen(3000);