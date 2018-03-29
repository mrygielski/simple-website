(function() {
    application.controller('mainIndexCtrl', function($timeout, $rootScope) {
        $rootScope.title = 'Title - home';
        $rootScope.dots = 'page-1';
        $timeout(function() {
            if (!$rootScope.lockMoveTo) {
                $rootScope.lockMoveTo = true;
                $.fn.fullpage.moveTo(1);
            }
        }, 0);
    });
})();