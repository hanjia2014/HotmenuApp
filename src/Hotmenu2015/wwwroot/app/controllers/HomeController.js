var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var HotmenuApp;
(function (HotmenuApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function (_super) {
            __extends(HomeController, _super);
            function HomeController($scope, $location, menuService, $q) {
                _super.call(this);
                this.$scope = $scope;
                this.$location = $location;
                this.menuService = menuService;
                this.$q = $q;
            }
            HomeController.$inject = ['$scope', '$location', 'HotmenuApp.Services.MenuService', '$q'];
            return HomeController;
        })(Controllers.BaseController);
        Controllers.HomeController = HomeController;
        angular.module("hotmenuApp").controller("HotmenuApp.Controllers.HomeController", HomeController);
    })(Controllers = HotmenuApp.Controllers || (HotmenuApp.Controllers = {}));
})(HotmenuApp || (HotmenuApp = {}));
