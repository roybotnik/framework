/*
 * Include all tests we want to run as a package here.
 * Hopefully this can get a little more sophisticated as we move on.
 */

// Core.Router
require('./core/router/basic_tests.js');
require('./core/router/dispatch_tests.js');

// Core.Http.Server
require('./core/http/server/configuration_tests.js');
require('./core/http/server/startup_tests.js');

