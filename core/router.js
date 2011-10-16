/*
 * The router is used to determine which controller should handle a request.
 * It parses a configuration file that contains all of the routes, then routes request using the dispatch method.
 * The route config file is automatically loaded from a preset location when this module is required.
 * This can be considered the entry point for the actual application code.
 */
var Router = function (config) {
};

Router.prototype = {
	namespace : 'Douche',

	constructor : Router,

	/*
	 * Dispatches an incoming request by sending it to the controller that will handle it.
	 */
	dispatch : function (req, res) {
		console.log('=== Begin ===');

		var body = "Hello world";

		res.writeHead(404, {
			'Content-Type': 'text/plain',
			'Content-Length' : body.length
		});

		res.write(body);

		console.log('=== End ===');
	}
};

// Export as an instance
exports.Router = Router;
