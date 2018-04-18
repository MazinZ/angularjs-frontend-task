(function() {
  angular
      .module('fetchrev')
      .controller('BusinessController', BusinessController);

  BusinessController.$inject = ['BusinessService', '$state'];

  function BusinessController(BusinessService, $state) {
    const vm = this;

    vm.businesses = [];
    vm.filtered = [];
    vm.selected = null;

    vm.filter = filter;
    vm.click = click;

    BusinessService.getBusinesses().then((res) => {
      vm.businesses = res.data.businesses;
      vm.filtered = [...vm.businesses];
      vm.franchises = [...new Set(vm.businesses.map(b => b.franchise))];
      console.log(vm.businesses)
    });

    function filter() {
      if (!vm.selected) {
        vm.filtered = [...vm.businesses]
      } else {
        vm.filtered = vm.businesses.filter(b => b.franchise === vm.selected);
      }
    }

    function click(business) {
      $state.go('subscribers', { id: businesses.id });
    }

  }
})();
