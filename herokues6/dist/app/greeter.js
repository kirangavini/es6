'use strict';

function greeter() {
	var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'hello world!';

	return msg;
}

module.exports = greeter;