var testing = require('testing');

// Get tests
var tests = require('./test.js');

var runner = new testing.Runner();

var suite = new testing.Suite({
	runner : runner,
});

