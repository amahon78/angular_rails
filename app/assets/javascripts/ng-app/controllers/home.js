(function() {
    var HomeCtrl = function($scope){
        $scope.things=['Angular','Rails 4.1', 'Working', 'Together!!'];
    };

    HomeCtrl.$inject = ['$scope'];

    angular.module('AngularRails')
        .controller ('HomeCtrl', HomeCtrl);
})();

