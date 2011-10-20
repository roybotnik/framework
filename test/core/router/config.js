exports.routes = [
	{ url: '/test', method: 'get', controller: 'test', action: 'test' },
	{ url: '/test/', method: 'get', controller: 'test', action: 'test' }
];

var testController = function () {
};
testController.prototype = {
	testAction : function (context) {
		console.log('testAction');
	},
	otherAction : function (context) {
		console.log('otherAction');
	}
};
var controller = new testController();

exports.controllers = {testController : controller};
