angular.module('starter')
.controller('finalizarPedidoController', function($stateParams, $scope){

// $stateParams: recebe o parametro
    $scope.carroFinalizado = angular.fromJson($stateParams.carro);

});