(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.menu = "";
        $scope.msg = "";

        $scope.item_counter = function () {
            var a = $scope.menu.split(',');

            if ($scope.menu === "") {
                $scope.msg = "Enter some data";
            } else if (a.length < 3) {
                $scope.msg = "Enjoy";
            } else  {
                $scope.msg = "Too much";
            }
        };

    }


})();