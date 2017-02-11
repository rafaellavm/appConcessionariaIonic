angular.module('starter')
.controller('carroEscolhidoController', function($scope, $stateParams){

    //$stateParams.carro vem como string, então tem que transformar em json
    $scope.carroEscolhido = angular.fromJson($stateParams.carro);

    $scope.listaDeAcessorios = [
        {'nome': 'Freio ABS', 'preco': 800},
        {'nome': 'Ar-condicionado', 'preco': 1000},
        {'nome': 'MP3 Player', 'preco': 300}
        ];

    $scope.mudaCheckAcessorio = function(acessorio, isMarcado){
        if(isMarcado){
            $scope.carroEscolhido.preco = $scope.carroEscolhido.preco + acessorio.preco;
        }
        else{
            $scope.carroEscolhido.preco = $scope.carroEscolhido.preco - acessorio.preco;
            
        }
    };
});