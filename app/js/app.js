(function() {
  angular
      .module('fetchrev', [
        'ui.router',
      ]);

  angular
      .module('fetchrev')
      .config(config);

  angular
      .module('fetchrev')
      .factory('interceptor', interceptor);

  function config($locationProvider, $httpProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
    $httpProvider.interceptors.push('interceptor');
  }

  function interceptor() {
    const token = '375932654'; // (mazinz): Should make this configurable.

    return {
      request: (config) => {
        config.params = config.params || {};
        config.params.token = token;
        return config;
      },
      responseError: (err) => {
        console.log(err);
        return err;
      }
    };
  }

})();