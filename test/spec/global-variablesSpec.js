AWS = {
	s3Bucket: {
		params: {},
		putObject: function(params) {
	        var deferred = $q.defer();
	        deferred.resolve();
	        return deferred.promise;
		}
	},
	config: {
		update: function(object) {

		}
	},
	S3: function(params) {
		return this.s3Bucket;
	}
}