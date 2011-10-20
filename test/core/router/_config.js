exports.routes = [
	{ url: '/test', method: 'get', controller: 'testController', action: 'testAction' },
	{ url: '/skrit', method: 'post', controller: 'testController', action: 'otherAction' },
	{ url: '/shit', method: 'get', controller: 'testController', action: 'notAnAction' },
	{ url: '/fuck', method: 'get', controller: 'notAController', action: 'otherAction' }
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
