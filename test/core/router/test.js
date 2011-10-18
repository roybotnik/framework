var testing = require('testing');

// Get framework
var framework = require('../../../framework.js');
var config = require('./config.js');

// Create an instance of the router
var router = new framework.core.routing.router(config);

var runner = new testing.Runner();

var suite = new testing.Suite({
	runner : runner,

	'Should find route for /test' : function () {
		var route = router.findRoute('/test');

		testing.Assert(route !== null, 'Route was null');
	}
});

suite.run();

