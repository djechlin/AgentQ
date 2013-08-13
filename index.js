var Q = require('q');

module.exports.end = function(request) {
	var deferred = Q.defer();
	request.end(deferred.resolve.bind(deferred));
	return deferred.promise;
};