var http = require('http');
var router = require('./core/router.js');

http.createServer(function (req, res) {
	router.dispatch(req, res);
	res.end();
}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');

