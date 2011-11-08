exports.Logger = require('./logger.js').Instance;

// Include fake objects for testing.
exports.Fakes = {
	Core : {
		Http : {
			Context : require('./fakes/core/http/context.js').Context,
			Server : require('./fakes/core/http/server.js').Server
		}
	},
	Node : {
		Http : require('./fakes/node/http.js').Instance
	}
};
