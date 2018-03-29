(function() {
    /**
     * Informacje o ofercie
     */
    application.controller('mainOfferCtrl', function($rootScope, $timeout) {
        $rootScope.title = 'Title - offer';
        $rootScope.dots = 'page-2';
        $timeout(function() {
            if (!$rootScope.lockMoveTo) {
                $rootScope.lockMoveTo = true;
                $.fn.fullpage.moveTo(2);
            }
        }, 0);
    });
}) ();