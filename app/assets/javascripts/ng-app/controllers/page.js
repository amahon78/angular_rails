(function() {
    var PageCtrl = function($scope){
        $scope.things=['Another','array', 'of things', 'To see'];
    };

    PageCtrl.$inject = ['$scope'];

    angular.module('AngularRails')
        .controller ('PageCtrl', PageCtrl);
})();