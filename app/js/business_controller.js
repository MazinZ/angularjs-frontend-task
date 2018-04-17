(function() {
  angular
      .module('fetchrev')
      .controller('BusinessController', BusinessController);

  BusinessController.$inject = ['BusinessService'];

  function BusinessController(BusinessService) {
    const vm = this;

    vm.businessList = [];
    vm.filter = filter;

    BusinessService.getBusinesses().then((res) => {
      vm.businessList = res.data;
    });

    function filter(franchise) {

    }



  }
})();
  