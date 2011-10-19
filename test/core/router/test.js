// Get framework & core lib
var Framework = require('../../../framework.js');
var Core = require('framework-core');

// to make it easier
var Assert = Core.Testing.Assert;

// Get test config
var config = require('./config.js');

// Create an instance of the router
var router = new Framework.Core.Routing.Router(config);

var runner = new Core.Testing.Runner();

var suite = new Core.Testing.Suite({
	runner : runner,

	'Should find route for /test' : function () {
		var route = router.findRoute('/test');

		Assert(route !== null, 'Route was null');
	},

	'Should not find a route for /fasdf' : function () {
		var route = router.findRoute('/fasdf');

		Assert(route === null, 'Route was not null');
	}
});

// run
suite.run();
