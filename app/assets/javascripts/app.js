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
      templateUrl: 'app/views/stereos/index.html',
      controller: 'StereosController as ctrl',
      resolve: {
        stereos: function (DataService) {
          return DataService.getStereos();
        }
      }
    })
    .state('home.newStereo', {
      url:'stereos/new',
      templateUrl: 'app/views/stereos/stereo.html',
      controller: 'StereoController as ctrl',
      resolve: {
        components: function (DataService) {
          return DataService.getComponents();
        }
      }
    })
    $urlRouterProvider.otherwise('welcome');
})
