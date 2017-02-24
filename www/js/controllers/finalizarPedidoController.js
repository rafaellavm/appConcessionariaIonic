angular.module('starter')
.controller('finalizarPedidoController', function($stateParams, $scope, $ionicPopup, $state, CarroService){

// $stateParams: recebe o parametro
    $scope.carroFinalizado = angular.fromJson($stateParams.carro);
    $scope.pedido = {};
    
    $scope.finalizarPedido = function(pedido){

        var pedidoFinalizado = {
            params:{
                carro: $scope.carroFinalizado.nome,
                preco: $scope.carroFinalizado.preco,
                nome: $scope.pedido.nome,
                endereco: $scope.pedido.endereco,
                email: $scope.pedido.email
            }
        }

        console.log('pedido = ', pedidoFinalizado);
        CarroService.salvarPedido(pedidoFinalizado).then(function(dados){
            
            $ionicPopup.alert({
                title: "Parabéns!",
                template: "Você acaba de comprar um carro!"
            }).then(function(){
                $state.go('listagem')
            });

        }, function(erro){
             
             $ionicPopup.alert({
                title: "Deu erro",
                template: "Campos obrigatórios"
            });

        });

    }

});