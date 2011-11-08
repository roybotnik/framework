/**
 * This is a fake version of the HTTP library for testing use.
 */
var fakeHttp = function () {};

// I don't like requiring this here, but it will have to do now.
fakeHttp.prototype.Server = require('../core/http/server.js');

fakeHttp.prototype.createServer = function () {
	return new this.Server();
};

// Export an instance
exports.Instance = new fakeHttp();
