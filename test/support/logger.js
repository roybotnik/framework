/**
 * Logger for testing purposes.  Allows us to avoid spitting a ton of output to the console for no reason.
 */
var logger = function () {
	this.messages = [];
};

logger.prototype = {
	log : function (message) {
		this.messages.push(message);
	}
};

exports.Instance = new logger();
