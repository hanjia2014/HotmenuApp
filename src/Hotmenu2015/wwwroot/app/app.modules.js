var HotmenuApp;
(function (HotmenuApp) {
    var app = angular.module("hotmenuApp", ['ngRoute']);
    app.config(HotmenuApp.Routes.configureRoutes);
})(HotmenuApp || (HotmenuApp = {}));
