var http = require('http');
var fs = require('fs');
//var path = require('path');
var extract = require('./extract');
var wss = require('./websockets-server');
var mime=require('mime');//for silver challenge

var handleError = function (err,res) {
    res.writeHead(404);
    res.end('<h1>File does NOT exist!</h1>');
};

var server = http.createServer(function (req,res) {
    console.log('Responding to a request.');
    var filePath = extract(req.url);
    fs.readFile(filePath,function (err,data) {
        if (err) {
            handleError(err,res);
            return;
        }else {
            res.writeHead(200,{'Content-Type':mime.lookup(filePath)}); //for silver challenge
            res.end(data);
        }

    });
});

server.listen(3000);
