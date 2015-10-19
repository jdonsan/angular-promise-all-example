(function () {
	'use strict';

	angular
		.module('promiseAll')
		.controller('AppController', AppController);

	AppController.$inject = ['appService'];

	function AppController(appService) {
		var vm = this;

		iniciar();

		function iniciar() {
			var paises = ['America/Toronto', 'Europe/Madrid', 'Europe/Moscow', 'Australia/Melbourne'];

			appService.obtenerHoraDePaises(paises).then(obtenerPaisesExito);

			function obtenerPaisesExito(paises) {
				vm.paises = paises;
			}
		}
	}
})();