// Get framework & core lib
var Framework = require('../../../framework.js');
var Core = require('framework-core');
var Fake = require('../fakes/fakeContext.js');

// to make it easier
var Assert = Core.Testing.Assert;

// Get test config
var config = require('./config.js');

// Create some test instances
var router = new Framework.Core.Router(config);
var context = new Fake.FakeContext();

var runner = new Core.Testing.Runner();
var suite = new Core.Testing.Suite({
	runner : runner,
	'Should throw an error if config is missing' : function () {
		try {
			var testRouter = new Framework.Core.Router();
		}
		catch (e)
		{
			Assert(e === "No config was specified", "There was no error or the message didn't match");
		}
	},

	'Should find route for get: /test' : function () {
		var route = router.findRoute('/test', 'get');

		Assert(route !== null, 'Route was null');
	},

	'Should not find a route for get: /fasdf' : function () {
		var route = router.findRoute('/fasdf', 'get');

		console.log(route);
		Assert(route === null, 'Route was not null');
	}
});

// run
suite.run();
