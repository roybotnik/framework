var Context = require('./context.js').Context;

/*
 * A wrapper for Node's (and possibly others) HTTP server library.
 */
var server = function (config) {
	this.verifyConfig(config);
	
	this.router = config.router;
	this.http = config.http;
	this.logger = config.logger;
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
		if (config.logger === undefined) {
			throw "Please provide a logger";
		}
	},

	/*
	 * Starts a new HTTP server and attaches the config.router to handle requests.
	 */
	start : function (ip, port) {
		// Start the HTTP server
		this.httpServer = this.http.createServer();

		// Attach the request handler
		this.httpServer.on('request', this.logRequest.bind(this));
		this.httpServer.on('request', this.handleRequest.bind(this));

		// Listen
		this.httpServer.listen(port, ip);

		this.logger.log('Server running at http://' + ip + ':' + port + '/');	
	},

	/*
	 * Shuts down the HTTP server.
	 */
	stop : function() {
		this.httpServer.close();
	},

	/*
	 * Handles http server requests.
	 */
	handleRequest : function(req, res) {
		var ctx = new Context(req, res);

		// This is just for debugging...
		try {	
			this.router.dispatch(ctx);
		}
		finally {
			res.end();
		}
	},

	/**
	 * Logs some basic info about incoming requests
	 */
	logRequest : function(req, res) {
		this.logger.log("== " + req.method + ': ' + req.url + " ==");
	}
}

exports.Server = server;
