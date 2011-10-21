/*
 * Logger that currently just wraps console.log.  Will add some functionality later.
 */
var logger = function () {};

logger.prototype = {
	log : function (string) {
		console.log(string);
	}
};

exports.Logger = logger;
