(function () {
	'use strict';

	angular
		.module('promiseAll')
		.filter('timestamp', timestamp);

	function timestamp() {
		return function(input) {
			return new Date(input * 1000).toUTCString();
		};
	}
})();