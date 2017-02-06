angular.module('starter')
.controller('carroEscolhidoController', function($scope, $stateParams){

    $scope.carroEscolhido = $stateParams.carro;
});