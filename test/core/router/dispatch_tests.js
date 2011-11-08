console.log('\nCore.Router - Dispatch Tests\n');

// Get framework & core lib
var Framework = require('../../../framework.js');
var Core = require('framework-core');
var TestingSupport = require('../../support/_support.js');

// to make it easier
var Assert = Core.Testing.Assert;

// Get test config
var config = require('./_config.js');

// Create some test instances
var router = new Framework.Core.Router(config);
var context = new TestingSupport.Fakes.Core.Http.Context();

var suite = new Core.Testing.Suite({
	setUp : function () {
		context.reset();
	},

	'GET: /test should set response body' : function () {
		context.setUrl('/test', 'get');

		router.dispatch(context);

		Assert(context.res.body === "my body\n", "response body did not match");
	},

	'GET: /test should set response status' : function () {
		context.setUrl('/test', 'get');

		router.dispatch(context);

		Assert(context.res.head.statusCode === 200, "response status code was wrong");
	},

	'GET: /crap should set response status to 404' : function () {
		context.setUrl('/crap', 'get');

		router.dispatch(context);

		Assert(context.res.head.statusCode === 404, "response status code was wrong");
	},

	'POST: /skrit should set response body' : function () {
		context.setUrl('/skrit', 'post');

		router.dispatch(context);

		Assert(context.res.body === "other body\n", "response body did not match");
	},

	runner : new Core.Testing.Runner()
});

// run
suite.run();
