angular.module('starter')
.controller('LoginController', function($scope, CarroService, $ionicPopup, $state){
    
    $scope.login = {};

    $scope.realizarLogin = function(){
        
        var dadosLogin = {
            params:{
                email: $scope.login.email,
                senha: $scope.login.senha,
            }
        }

        CarroService.realizarLogin(dadosLogin)
        .then(function(dados){
            $state.go('listagem');
            //joao@alura.com.br
            //alura123
        }, function(erro){
             $ionicPopup.alert({
                 title: 'Opa!',
                 template: 'Email ou senha incorretos!'
             });
        });
    };


});