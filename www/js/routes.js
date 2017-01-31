angular.module('starter')
.config(function($stateProvider, $urlRouterProvider){

    $stateProvider 
    .state('listagem', {
      url: '/listagem',
      templateUrl: 'templates/listagem.html',
      controller: 'ListagemController'
      }
    );

    //rota padrão
    $urlRouterProvider.otherwise('/listagem');

});