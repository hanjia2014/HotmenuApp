module HotmenuApp {
    var app = angular.module("hotmenuApp", ['ngRoute']);
    app.config(Routes.configureRoutes);
}