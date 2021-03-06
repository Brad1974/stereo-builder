angular
.module('app', ['ui.router', 'templates', 'ngMessages', 'Devise' ])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url:'/',
      templateUrl: 'app/views/home.html',
      controller: 'HomeController as ctrl'
    })
    .state('home.welcome', {
      url:'welcome',
      templateUrl: 'app/views/welcome.html'
    })
    .state('home.componentindex', {
      url: 'components',
      templateUrl: 'app/views/components/components.html',
      controller: 'ComponentsController as ctrl',
      resolve: {
        components: ["DataService", function (DataService) {
          return DataService.getComponents();
        }]
      }
    })
    .state('home.stereoindex', {
      url:'stereos',
      templateUrl: 'app/views/stereos/index.html',
      controller: 'StereosController as ctrl',
      resolve: {
        stereos: ["DataService", function (DataService) {
          return DataService.getStereos();
        }]
      }
    })
    .state('home.show', {
      url:'stereos/:id',
      templateUrl: 'app/views/stereos/stereo.html',
      controller: 'StereoController as ctrl',
      resolve: {
        stereo: ["$stateParams", "DataService", function ($stateParams, DataService) {
          return DataService.getStereo($stateParams.id);
        }],
        components: ["DataService", function (DataService) {
          return DataService.getComponents();
        }],
        comments: ["$stateParams", "DataService", function ($stateParams, DataService) {
          return DataService.getComments($stateParams.id);
        }]
      }
    })
    .state('home.newStereo', {
      url:'newstereo',
      templateUrl: 'app/views/stereos/stereo.html',
      controller: 'StereoController as ctrl',
      resolve: {
        components: ["DataService", function (DataService) {
          return DataService.getComponents();
        }],
        stereo: ["$stateParams", "DataService", function ($stateParams, DataService) {
          return ""
        }],
        comments: ["$stateParams", "DataService", function ($stateParams, DataService) {
          return ""
        }]
      }
    })
    .state('home.login', {
      url: 'login',
      templateUrl: 'app/views/auth/_login.html',
      controller: 'AuthController',
      data: { authRejected: true }
    })
    .state('home.register', {
      url: 'register',
      templateUrl: 'app/views/auth/_register.html',
      controller: 'AuthController',
      data: { authRejected: true },
    })
    $urlRouterProvider.otherwise('welcome');
}])
