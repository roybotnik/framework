var Framework = require('../../../../framework.js');
var Core = require('framework-core');
var Fake = require('../fakes/fakeHttp.js');

// to make it easier
var Assert = Core.Testing.Assert;

var runner = new Core.Testing.Runner();
var suite = new Core.Testing.Suite({
	runner : runner,

	'Should throw an error if config is missing' : function () {
		try
		{
			var server = new Framework.Core.Http.Server();
		}
		catch (e) {
			Assert(e === "No config was specified", "There was no error or the message didn't match");
		}
	},

	'Should throw an error if config is missing a router' : function () {
		try
		{
			var server = new Framework.Core.Http.Server({
				http : require('http'),
				logger : {}
			});
		}
		catch (e) {
			Assert(e === "Please provide a router to handle the request: config.router = new Framework.Core.Router()", "There was no error or the message didn't match");
		}
	},

	'Should throw an error if config is missing http library' : function () {
		try
		{
			var server = new Framework.Core.Http.Server({
				router : {},
				logger : {}
			});
		}
		catch (e) {
			Assert(e === "Please provide a reference to the http library", "There was no error or the message didn't match");
		}
	},

	'Should throw an error if config is missing logger' : function () {
		try
		{
			var server = new Framework.Core.Http.Server({
				router : {},
				http : {}
			});
		}
		catch (e) {
			Assert(e === "Please provide a logger", "There was no error or the message didn't match");
		}
	},

	'Should listen on IP and Port when start() is called' : function () {
		try
		{
			var server = new Framework.Core.Http.Server({
				router : {},
				http : Fake.Fake
			});
		}
		catch (e) {
			Assert(e === "Please provide a logger", "There was no error or the message didn't match");
		}
	},
});

// run
suite.run();
