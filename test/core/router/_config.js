exports.routes = [
	{ url: '/', method: 'get', controller: 'testController', action: 'index' },
	{ url: '/test', method: 'get', controller: 'testController', action: 'testAction' },
	{ url: '/skrit', method: 'post', controller: 'testController', action: 'otherAction' },
	{ url: '/shit', method: 'get', controller: 'testController', action: 'notAnAction' },
	{ url: '/fuck', method: 'get', controller: 'notAController', action: 'otherAction' }
];

var testController = function () {
};
testController.prototype = {
	index : function (context) {
		console.log('index');
		context.res.write("index body");
	},
	testAction : function (context) {
		console.log('testAction');
		context.res.write("my body");
	},
	otherAction : function (context) {
		console.log('otherAction');
		context.res.write("other body");
	}
};
var controller = new testController();

exports.controllers = {testController : controller};
