var Util = require('util');
var EventEmitter = require('events').EventEmitter;

fakeServer = function () {
	this.port = null;
	this.ip = null;
};

util.inherit(fakeServer, EventEmitter);

fakeServer.prototype.listen = function (port, ip) {
	this.port = port;
	this.ip = ip;
};

exports.FakeServer = fakeServer;
