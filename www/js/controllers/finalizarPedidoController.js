angular.module('starter')
.controller('finalizarPedidoController', function($stateParams, $scope, $ionicPopup, $state){

// $stateParams: recebe o parametro
    $scope.carroFinalizado = angular.fromJson($stateParams.carro);
    
    $scope.finalizarPedido = function(){

        $ionicPopup.alert({
            title: "Parabéns!",
            template: "Você acaba de comprar um carro!"
        }).then(function(){
            $state.go('listagem')
        });
    }


});