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
    ).state('finalizarPedido', {
      url: '/finalizarPedido/:carro',
      templateUrl: 'templates/finalizarPedido.html',
      controller: 'finalizarPedidoController'
      }
    )
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html'
      }
    );

    //rota padrão
    $urlRouterProvider.otherwise('/login');

});