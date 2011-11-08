console.log('\nCore.Router - Basic Tests\n');

var Framework = require('../../../framework.js');
var Core = require('framework-core');

// to make it easier
var Assert = Core.Testing.Assert;

// Get test config
var config = require('./_config.js');

// Create test router
var router = new Framework.Core.Router(config);

var suite = new Core.Testing.Suite({
	'Should throw an error if config is missing' : function () {
		try {
			var testRouter = new Framework.Core.Router();
		}
		catch (e)
		{
			Assert(e === "No config was specified", "There was no error or the message didn't match");
		}
	},

	'Should throw an error if routes are not provided' : function () {
		try {
			var testRouter = new Framework.Core.Router({
				controllers : config.controllers,
				logger: config.logger
			});
		}
		catch (e)
		{
			Assert(e === "Please provide an array of routes", "There was no error or the message didn't match");
		}
	},

	'Should throw an error if controllers are not provided' : function () {
		try {
			var testRouter = new Framework.Core.Router({
				routes : config.routes,
				logger: config.logger
			});
		}
		catch (e)
		{
			Assert(e === "Please provide an array of controllers", "There was no error or the message didn't match");
		}
	},

	'Should throw an error if logger is not provided' : function () {
		try {
			var testRouter = new Framework.Core.Router({
				routes : config.routes,
				controllers : config.controllers
			});
		}
		catch (e)
		{
			Assert(e === "No logger was provided", "There was no error or the message didn't match");
		}
	},

	'Should find route for get: /test' : function () {
		var route = router.findRoute('/test', 'get');

		Assert(route !== null, 'Route was null');
	},

	'Should find route for post: /skrit' : function () {
		var route = router.findRoute('/skrit', 'post');

		Assert(route !== null, 'Route was null');
	},

	'Should not find a route for get: /fasdf' : function () {
		var route = router.findRoute('/fasdf', 'get');

		Assert(route === null, 'Route was not null');
	},

	'Should not find route for post: /test' : function () {
		var route = router.findRoute('/test', 'post');

		Assert(route === null, 'Route was not null');
	},
	runner : new Core.Testing.Runner()
});

// run
suite.run();
