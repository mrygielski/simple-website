(function() {
    application.controller('mainCtrl', function($scope, $rootScope, $http, $timeout, $location) {
        $rootScope.lockMoveTo = false;
        console.log('Ładowanie fullpage.js');
        $timeout(function() {
            angular.element('#fullpage').fullpage({
                afterLoad: function (anchorLink, index) {
                    //console.log(anchorLink);
                    //console.log(index);
                    var url = $(this).attr('data-url');
                    //$rootScope.lockMoveTo = true;
                    $timeout(function () {
                        $location.path(url);
                    }, 0);
                }
            });
        }, 0);

        $scope.data = {};
        $scope.send = function() {
            console.log($scope.data);
            $http({
                url : '/send',
                method : 'post',
                data : $scope.data
            }).then(function(response) {
                console.log(response);
            });
        };

        $scope.gotoOffer = function() {
            $rootScope.lockMoveTo = false;
            $location.path('/offer');
        };

        $scope.gotoContact = function() {
            $rootScope.lockMoveTo = false;
            $location.path('/contact');
        };
    });
})();