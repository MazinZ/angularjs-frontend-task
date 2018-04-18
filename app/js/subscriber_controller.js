(function() {
  angular
      .module('fetchrev')
      .controller('SubscriberController', SubscriberController);

  SubscriberController.$inject = ['BusinessService', '$state', '$stateParams'];

  function SubscriberController(BusinessService, $state, $stateParams) {
    const vm = this;

    vm.subscribers = [];
    vm.statuses = [];
    vm.filtered = [];
    vm.selected = null;

    vm.filter = filter;
    vm.create = create;

    const businessId = $stateParams.id;
    getSubscribers();

    function getSubscribers() {
      BusinessService.getSubscribers(businessId).then((res) => {
        vm.subscribers = res.data.subscribers;
        vm.filtered = [...vm.subscribers];
        vm.statuses = [...new Set(vm.subscribers.map(s => s.status))];
      });
    }

    function filter() {
      if (!vm.selected) {
        vm.filtered = [...vm.subscribers];
      } else {
        vm.filtered = vm.subscribers.filter(b => b.status === vm.selected);
      }
    }

    function create() {
      const name = vm.newSubscriber.name;
      const email = vm.newSubscriber.email;
      console.log(name, email)
      BusinessService.createSubscriber(name, email, businessId).then((res) => {
        // (mazinz): We don't need another API call here, can push directly to filtered.
        getSubscribers();
      });
    }

  }
})();
