var Q = require('q');

module.exports.end = function(request) {
	var deferred = Q.defer();
	request.end(function(err, res) {
		if(err) {
			deferred.reject(err);
		}
		else if(res) {
			deferred.resolve(res);
		}
		else {
			deferred.reject("No err or res passed.");
		}
	});
	return deferred.promise;
};

