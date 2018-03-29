(function(){
    /**
     * Obsługa strony kontaktowej
     */
    application.controller('mainContactCtrl', function($timeout, $rootScope) {
        $rootScope.title = 'Title - contact!';
        $rootScope.dots = 'page-3';
        $timeout(function() {
            if (!$rootScope.lockMoveTo) {
                $rootScope.lockMoveTo = true;
                $.fn.fullpage.moveTo(3);
            }
        }, 0);
    });
})();