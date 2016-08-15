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
    .state('home.show', {
      url:'stereos/:id',
      templateUrl: 'app/views/stereos/stereo.html',
      controller: 'StereoController as ctrl',
      resolve: {
        components: function (DataService) {
          return DataService.getComponents();
        },
        stereo: function ($stateParams, DataService) {
          return DataService.getStereo($stateParams.id);
        }
      }
    })

    .state('home.newStereo', {
      url:'newstereo',
      templateUrl: 'app/views/stereos/stereo.html',
      controller: 'StereoController as ctrl',
      resolve: {
        stereo: function ($stateParams, DataService) {
          if ($stateParams.id){
          return DataService.getStereo($stateParams.id);
          }
        },
        components: function (DataService) {
          return DataService.getComponents();
        }
      }
    })
    $urlRouterProvider.otherwise('welcome');
})
