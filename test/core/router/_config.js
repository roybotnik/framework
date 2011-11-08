exports.routes = [
	{ url: '/', method: 'get', controller: 'testController', action: 'index' },
	{ url: '/test', method: 'get', controller: 'testController', action: 'testAction' },
	{ url: '/skrit', method: 'post', controller: 'testController', action: 'otherAction' },
	{ url: '/whoa', method: 'get', controller: 'testController', action: 'notAnAction' },
	{ url: '/blah', method: 'get', controller: 'notAController', action: 'otherAction' }
];

var testController = function () {
};
testController.prototype = {
	index : function (context) {
		context.res.write("index body");
	},
	testAction : function (context) {
		context.res.write("my body");
		context.res.writeHead(200, {'Content-Type': 'text/plain'});
		context.res.end();
	},
	otherAction : function (context) {
		context.res.write("other body");
	}
};
var controller = new testController();

exports.controllers = {testController : controller};

exports.logger = require('../../support/logger.js').Instance;
