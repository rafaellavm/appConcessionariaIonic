angular.module('starter')
.service('CarroService', function($http){

    var url = 'https://aluracar.herokuapp.com/';

    return {
        obterCarros: function(){
            return $http.get(url).then(function(response){
                console.log('response.data = ', response.data);
                return response.data;
            });
        }
    }
});