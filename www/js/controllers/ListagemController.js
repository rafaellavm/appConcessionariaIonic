angular.module('starter')
.controller('ListagemController', function($scope, CarroService){

    CarroService.obterCarros().then(function(success){
        //console.log(success);
        $scope.listaDeCarros = success;
    });

    //$scope.listaDeCarros = CarroService.obterCarros();
    
   
});