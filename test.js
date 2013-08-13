var request = require('superagent');
var qrequest = require('./index.js');
var assert = require('assert');

qrequest.end(request.get("http://example.com"))
.then(function(res) {
	assert(res.status === 200);
}).done();
