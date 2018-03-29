<!DOCTYPE html>
<html lang="pl" ng-app="Application">
    <head>
        <title ng-bind="title">Loading...</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

        <link href='https://fonts.googleapis.com/css?family=Dosis:400,500,600,800,700,300,200' rel='stylesheet' type='text/css' />
        <link rel="shortcut icon" href="/favicon.png" type="image/png">
        <link rel="stylesheet" href="/css/app.css" />

        <script type="text/javascript" src="/vendor/jquery/dist/jquery.min.js"></script>
        <script type="text/javascript" src="/vendor/angular/angular.min.js"></script>
        <script type="text/javascript" src="/vendor/angular-route/angular-route.min.js"></script>
        <script type="text/javascript" src="/vendor/angular-route-segment.js"></script>
        <script type="text/javascript" src="/vendor/fullpage.js/jquery.fullPage.min.js"></script>

        <script type="text/javascript" src="/js/app.js"></script>

        <base href="/" />
    </head>
    <body>
        <div app-view-segment="0"></div>
    </body>
</html>