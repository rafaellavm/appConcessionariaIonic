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
      url: '/finalizarPedido',
      templateUrl: 'templates/finalizarPedido.html',
      controller: 'finalizarPedidoController'
      }
    );

    //rota padrão
    $urlRouterProvider.otherwise('/listagem');

});