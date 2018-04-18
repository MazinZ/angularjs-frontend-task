(function() {
  angular
      .module('fetchrev', [
        'ui.router',
        'angular-loading-bar',
        'notification',
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

  angular
      .module('notification', ['ui-notification'])
      .config(function(NotificationProvider) {
        NotificationProvider.setOptions({
          delay: 10000,
          startTop: 20,
          startRight: 10,
          verticalSpacing: 20,
          horizontalSpacing: 20,
          positionX: 'right',
          positionY: 'bottom',
          closeOnClick: false
        });
  });

  interceptor.$inject = ['$injector']

  function interceptor($injector) {
    const token = '375932654'; // (mazinz): Should make this configurable.

    return {
      request: (config) => {
        config.params = config.params || {};
        config.params.token = token;
        return config;
      },
      responseError: (err) => {
        $injector.get("Notification").error(err.message || 'Error');
        return err;
      }
    };
  }

})();