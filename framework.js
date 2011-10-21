// This file assembles all the framework classes into a single object

/*
 * Core Includes
 */
exports.Core = {
	Http : {
		Server : require('./lib/core/http/server.js').Server,
		Context : require('./lib/core/http/context.js').Context
	},
	Router : require('./lib/core/router.js').Router,
	Logger : require('./lib/core/logger.js').Logger,
	Tools : require('./lib/core/tools.js').Tools
};

/*
 * Base Classes - used to construct new applications
 */
exports.Base = {
	Controller : require('./lib/base/controller.js').Controller,
};

