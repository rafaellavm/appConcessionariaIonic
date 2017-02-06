angular.module('starter')
.config(function($stateProvider, $urlRouterProvider){

    $stateProvider 
    .state('listagem', {
      url: '/listagem',
      templateUrl: 'templates/listagem.html',
      controller: 'ListagemController'
      }
    )
    .state('carroescolhido', {
      url: '/carroescolhido/:carro',
      templateUrl: 'templates/carroEscolhido.html',
      controller: 'carroEscolhidoController'
      }
    );

    //rota padrão
    $urlRouterProvider.otherwise('/listagem');

});