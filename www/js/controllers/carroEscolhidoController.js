angular.module('starter')
.controller('carroEscolhidoController', function($scope, $stateParams){

    //$stateParams.carro vem como string, então tem que transformar em json
    $scope.carroEscolhido = angular.fromJson($stateParams.carro);
});