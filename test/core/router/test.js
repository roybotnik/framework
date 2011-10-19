var testing = require('testing');

// Get framework
var framework = require('../../../framework.js');

// Get test config
var config = require('./config.js');

// Create an instance of the router
var router = new framework.core.routing.router(config);

var tests = {
	'Should find route for /test' : function () {
		var route = router.findRoute('/test');

		testing.Assert(route !== null, 'Route was null');
	},

	'Should not find a route for /fasdf' : function () {
		var route = router.findRoute('/fasdf');

		testing.Assert(route === null, 'Route was not null');
	}
};

// export tests
exports.tests = tests;
