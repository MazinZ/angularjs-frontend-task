(function() {

  angular
      .module('fetchrev')
      .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('businesses', {
        url: '/',
        templateUrl: '/app/partials/businesses.html',
      })
      .state('subscribers', {
        url: '/:id/subscribers',
        templateUrl: '/app/partials/subscribers.html',
      })
      ;
  }
})();


