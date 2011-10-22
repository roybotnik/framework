/**
 * This is a fake version of the HTTP library for testing use.
 */
fakeHttp = function () {};

// I don't like requiring this here, but it will have to do now.
// I would prefer to add it in the _fakes.js file.
fakeHttp.prototype.Server = require('./fakeServer.js').FakeServer;

fakeHttp.prototype.createServer = function () {
	return new this.Server();
};

// Export an instance
exports.Instance = new fakeHttp();
