(function() {
  angular
      .module('fetchrev')
      .factory('BusinessService', BusinessService);

  BusinessService.$inject = ['$http'];

  function BusinessService($http) {
    const endpoint = 'https://young-temple-44207.herokuapp.com/businesses';

    return {
      createSubscriber,
      getBusinesses,
      getSubscribers,
    };

    function getBusinesses() {
      return $http({
        method: 'GET',
        url: endpoint,
      });
    }

    function getSubscribers(businessId) {
      return $http({
        method: 'GET',
        url: `${endpoint}/${businessId}/subscribers`,
      });
    }

    function createSubscriber(name, email, businessId) {
      const data = {
        'subscriber[name]': name,
        'subscriber[email]': email,
      };

      return $http({
        method: 'POST',
        url: `${endpoint}/${businessId}/subscribers`,
        params: data
      });
    }

  }
})();