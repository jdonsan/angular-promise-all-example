(function () {
	'use strict';

	angular
		.module('promiseAll')
		.factory('appService', appService);

	appService.$inject = ['$q', '$http'];

	function appService($q, $http) {
		// Interfaz servicio
		var service = {
			obtenerHoraDePaises: obtenerHoraDePaises
		};
		return service;


		// Métodos públicos
		function obtenerHoraDePaises(paises) {
			var $d = $q.defer();
			var promesas = [];

			for (var i = 0; i < paises.length; i++) {
				var opciones = {
					method: 'GET',
					url: 'http://api.timezonedb.com/?zone=' + paises[i] + '&format=json&key=G7TX75FYVRJJ'
				};

				promesas.push($http(opciones));
			}

			$q.all(promesas).then(function (promesasRes) {
				$d.resolve(promesasRes);
			});

			return $d.promise;
		}
	}
})();