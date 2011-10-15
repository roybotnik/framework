var Router = function () {
	this.stuff = "Fuuuuu\n";
}

Router.prototype = {
	constructor : Router,

	dispatch : function (req, res) {
		console.log('=== Begin ===');

		var body = this.stuff;

		res.writeHead(404, {
			'Content-Type': 'text/plain',
			'Content-Length' : body.length
		});

		res.write(body);

		console.log('=== End ===');
	}
}

module.exports = new Router();
