angular.module('starter')
.controller('ListagemController', function($scope){

    $scope.listaDeCarros = [
        {
        'nome': 'BMW 120i',
        'preco': 70000},
         {
        'nome': 'Onix 1.6',
        'preco': 55000}
        
        ];
});