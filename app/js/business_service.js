(function() {
  angular
      .module('fetchrev')
      .factory('BusinessService', BusinessService);

  BusinessService.$inject = ['$http'];

  function BusinessService($http) {
    const endpoint = 'https://young-temple-44207.herokuapp.com/businesses/';

    return {
      createSubscriber,
      getSubscribers,
    }

    function getBusinesses() {
      return $http({
        method: 'GET',
        url: endpoint,
      });
    }

    function getSubscribers(bId) {
      return $http({
        method: 'GET',
        url: `${endpoint}/${bId}/subscribers`,
      });
    }

    function createSubscriber(name, email, bId) {
      const data = {
        name,
        email
      };
      return $http({
        method: 'POST',
        url: `${endpoint}/${bId}/subscribers`,
        data,
      });
    }

  }
})();