var util = require('util');
var EventEmitter = require('events').EventEmitter;

fakeServer = function () {
	this.port = null;
	this.ip = null;
};

util.inherits(fakeServer, EventEmitter);

fakeServer.prototype.listen = function (port, ip) {
	this.port = port;
	this.ip = ip;
};

exports.Server = fakeServer;
