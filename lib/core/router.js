/*
 * The router is used to determine which controller should handle a request.
 * It parses a configuration file that contains all of the routes, then routes request using the dispatch method.
 * The route config file is automatically loaded from a preset location when this module is required.
 * This can be considered the entry point for the actual application code.
 */
var router = function (config) {
	this.verifyConfig(config);

	this.routes = config.routes;
	this.controllers = config.controllers;

	// Regex-ify route URLs, combine method to make for simpler search
	this.routes.forEach(function (route) {
		var fullRoute = route.method.toUpperCase() + ":" + route.url;

		var regex = new RegExp(fullRoute, "i");

		route.urlRegex = regex;
	}, this);
};

router.prototype = {
	constructor : router,

	/**
	 * Verifies the config when a new server is instantiated.
	 */
	verifyConfig : function (config) {
		if (config === undefined) {
			throw "No config was specified";
		}
		if (config.routes === undefined) {
			throw "Please provide an array of routes";
		}
		if (config.controllers === undefined) {
			throw "Please provide an array of controllers";
		}
	},

	/*
	 * Dispatches an incoming request by sending it to the controller that will handle it.
	 */
	dispatch : function (context) {
		console.log('=== Begin ===');

		var route = this.findRoute(context.req.url, context.req.method);
		
		if (route === null) {
			console.log('No route found for ' + context.req.url);

			context.res.writeHead(404, {
				'Content-Type': 'text/plain'
			});
			context.res.write('404 not found');

			return;
		}
		// Set the params on the context
		context.params = route.params;

		// Run the controller method that is specified in the route
		var body = this.controllers[route.controller][route.action](context); 
		
		context.res.writeHead(200, {
			'Content-Type': 'text/plain',
			'Content-Length' : body.length
		});

		context.res.write(body);
	},

	/*
	 * Finds the route for the given url
	 */
	findRoute : function (url, method) {
		var fullRequest = method.toUpperCase() + ":" + url;

		var foundRoute = null;

		this.routes.forEach(function (route) {
			var match = route.urlRegex.exec(fullRequest);

			if (match !== null) {
				foundRoute = route;
				foundRoute.params = match;
				return false;
			}
		}, this);

		return foundRoute;
	}
};

// Export
exports.Router = router;
