# Usage

SuperAgent's documentation has an example like this:

	 request
	   .post('/api/pet')
	   .send({ name: 'Manny', species: 'cat' })
	   .set('X-API-Key', 'foobar')
	   .set('Accept', 'application/json')
	   .end(function(res){
	     if (res.ok) {
	       alert('yay got ' + JSON.stringify(res.body));
	     } else {
	       alert('Oh no! error ' + res.text);
	     }
	   });

Use Agent-Q like this:

var qrequest = require('agent-q');

	 qrequest.end(request
	   .post('/api/pet')
	   .send({ name: 'Manny', species: 'cat' })
	   .set('X-API-Key', 'foobar')
	   .set('Accept', 'application/json'))
	   .then(function(res){
	     if (res.ok) {
	       alert('yay got ' + JSON.stringify(res.body));
	     } else {
	       alert('Oh no! error ' + res.text);
	     }
	   }).done();

Yep, it's that simple. But if you work with promises a lot, you know this gives you much-needed flexibility, e.g., to chain without dealing with pyramid code, and to return promises so the calling function can chain the callback.