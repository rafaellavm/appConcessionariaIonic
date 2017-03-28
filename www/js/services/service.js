angular.module('starter')
.service('CarroService', function($http){

    var url = 'https://aluracar.herokuapp.com/';

    return {
        obterCarros: function(){
            return $http.get(url).then(function(response){
                //console.log('response.data = ', response.data);
                return response.data;
            });
        },
        salvarPedido: function(pedido){
            return $http.get(url + 'salvarpedido', pedido).then(function(response){
                return 'Deu certo';
            });
        },
        realizarLogin: function(dadosLogin){

            return $http.get(url + "login", dadosLogin).then(function(response){
                return response.data;
            });
        }
    }
});