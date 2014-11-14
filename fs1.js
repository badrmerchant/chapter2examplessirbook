/**
 * Created by Badar on 11/14/2014.
 */
var http = require('http');
var fs = require("fs");
var filename = "badar1.html";
function start(req, resp) {
    resp.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile(filename, "utf8", function (err, data) {
        if (err) throw err;
        resp.write(data);
        resp.end();
    });
}
http.createServer(start);
app.listen(5000);