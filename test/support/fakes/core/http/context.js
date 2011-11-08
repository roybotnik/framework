var fakeResponse = function () {
	this.body = "";
	this.head = {};
	this.finished = false;
};

fakeResponse.prototype = {
	writeHead : function (statusCode, data) {
		this.head.statusCode = statusCode;
		this.head.data = data;
	},
	write : function (text) {
		this.body = this.body + text + "\n";
	},
	end : function () {
		this.finished = true;
	}
};

var fakeContext = function () {
	this.reset();
};
fakeContext.prototype = {
	constructor : fakeContext,
	setUrl : function (url, method) {
		this.req.url = url;
		this.req.method = method;
	},
	reset : function() {
		this.req = {};
		this.res = new fakeResponse();
		this.log = "";
	}
};

exports.Context = fakeContext;
