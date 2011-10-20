var context = function(httpRequest, httpResponse) {
	this.req = httpRequest;
	this.res = httpResponse;
};

context.prototype = {
};

exports.Context = context;

