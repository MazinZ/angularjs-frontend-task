(function() {
  angular
      .module('fetchrev', [
        'ui.bootstrap'
      ]);

  angular
      .module('fetchrev')
      .config(config);

  function config($locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
  }


  // angular
  //     .module(app_name)
  //     .factory('Interceptor', ['$q', '$window', '$injector', ($q, $window, $injector) => {
  //     return {
  //     'request': function(config) {
  //           if ($window.localStorage.token) config.headers['Authorization'] = 'Token ' + $window.localStorage.token;
  //           return config;
  //       },
    
  
  //       'response': function(response) {
  //           return response;
  //       },
  //       'responseError': function(rejection) {
  //         if (rejection.status == 401 || rejection.status == 400) {
  //         $injector.get("Notification").error(rejection.data.non_field_errors[0])
  //         }
  //         return $q.reject(rejection);
  //       }
  //     };
  //   }]);

})();