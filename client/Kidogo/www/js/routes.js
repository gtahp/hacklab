angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



  .state('shopping', {
    url: '/shopping',
    templateUrl: 'templates/shopping.html',
    controller: 'shoppingCtrl'
  })

  .state('cartTabDefaultPage', {
    url: '/page3',
    templateUrl: 'templates/cartTabDefaultPage.html',
    controller: 'cartTabDefaultPageCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract: true
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('shopsNearYou', {
    url: '/shopsnear',
    templateUrl: 'templates/shopsNearYou.html',
    controller: 'shopsNearYouCtrl'
  })

  .state('shoppingStatus', {
    url: '/acompany',
    templateUrl: 'templates/shoppingStatus.html',
    controller: 'shoppingStatusCtrl'
  })

  .state('availableNearby', {
    url: '/nearby',
    templateUrl: 'templates/availableNearby.html',
    controller: 'availableNearbyCtrl'
  })

  .state('details', {
    url: '/details',
    templateUrl: 'templates/details.html',
    controller: 'detailsCtrl'
  })

  .state('payment', {
    url: '/payment',
    templateUrl: 'templates/payment.html',
    controller: 'paymentCtrl'
  })

  $urlRouterProvider.otherwise('/page5')



});