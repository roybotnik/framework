var Context = require('./context.js').Context;

/*
 * A wrapper for Node's (and possibly others) HTTP server library.
 */
var server = function (config) {
	this.verifyConfig(config);
	
	this.router = config.router;
	this.http = config.http;
};

server.prototype = {
	/**
	 * Verifies the config when a new server is instantiated.
	 */
	verifyConfig : function(config) {
		if (config === undefined) {
			throw "No config was specified";
		}
		if (config.router === undefined) {
			throw "Please provide a router to handle the request: config.router = new Framework.Core.Router()";
		}
		if (config.http === undefined) {
			throw "Please provide a reference to the http library";
		};
	},

	/*
	 * Starts a new HTTP server and attaches the config.router to handle requests.
	 */
	start : function (ip, port) {
		// Start the HTTP server
		this.httpServer = this.http.createServer(this.handleRequest);
		this.httpServer.listen(port, ip);

		console.log('Server running at http://' + ip + ':' + port + '/');	
	},

	/*
	 * Handles http server requests.
	 */
	handleRequest : function(req, res) {
		var ctx = new Context(req, res);

		this.router.dispatch(ctx);
	}
}

exports.Server = server;
