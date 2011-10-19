var context = function(httpRequest, httpResponse) {
	this.req = req;
	this.res = res;
};

context.prototype = {
};

exports.Context = context;

