var application = angular.module('Application', [
    'ngRoute',
    'route-segment',
    'view-segment'
]);

application.factory('httpHeaderInterceptor',  function($location, $httpParamSerializerJQLike) {
    return {
        request: function(config) {
            if (config.method == 'POST') {
                if (typeof config['data'] != 'undefined') {
                    if (typeof config['data']['perform_file_upload'] != 'undefined') {
                        // wykryto upload pliku
                    } else {
                        config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
                        config.data = $httpParamSerializerJQLike(config.data);
                    }
                }
            }
            return config;
        },
        responseError : function(config) {
            if (config.status == 401 || config.status == 400) {
                $location.path('/login');
            }
            return  config;
        }
    }
});

application.config(function($httpProvider, $locationProvider, $routeSegmentProvider) {
    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('httpHeaderInterceptor');

    $routeSegmentProvider
        .when('/',          'main.index')
        .when('/offer',     'main.offer')
        .when('/contact',   'main.contact');

    $routeSegmentProvider
        .segment('main', {
            'controller' : 'mainCtrl',
            'templateUrl' : '/js/views/layouts/index.html'
        });

    $routeSegmentProvider.within('main')
        .segment('index', {
            controller : 'mainIndexCtrl'
        })
        .segment('offer', {
            template: ' ',
            controller : 'mainOfferCtrl'
        })
        .segment('contact', {
            controller : 'mainContactCtrl'
        });
});