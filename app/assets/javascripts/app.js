angular
.module('app', ['ui.router', 'templates', 'ngMessages', ])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url:'/',
      templateUrl: 'app/views/home.html'
    })
    .state('home.welcome', {
      url:'welcome',
      templateUrl: 'app/views/welcome.html'
    })
    .state('home.index', {
      url:'stereos',
      templateUrl: 'app/views/stereos/index.html'
    })
    .state('home.newStereo', {
      url:'stereos/new',
      templateUrl: 'app/views/stereos/stereo.html'
    })
    $urlRouterProvider.otherwise('welcome');
})
