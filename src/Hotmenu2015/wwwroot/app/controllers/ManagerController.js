var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var HotmenuApp;
(function (HotmenuApp) {
    var Controllers;
    (function (Controllers) {
        var ManagerController = (function (_super) {
            __extends(ManagerController, _super);
            function ManagerController($scope, $location, menuService, $q, $window, orderHub) {
                _super.call(this);
                this.$scope = $scope;
                this.$location = $location;
                this.menuService = menuService;
                this.$q = $q;
                this.$window = $window;
                this.orderHub = orderHub;
                this.orderHub.client.updateOrderProcessStatus = function (order) {
                    alert(order);
                };
            }
            ManagerController.$inject = ['$scope', '$location', 'HotmenuApp.Services.MenuService', '$q', '$window', 'orderHub'];
            return ManagerController;
        })(Controllers.BaseController);
        Controllers.ManagerController = ManagerController;
        angular.module("hotmenuApp").controller("HotmenuApp.Controllers.ManagerController", ManagerController);
    })(Controllers = HotmenuApp.Controllers || (HotmenuApp.Controllers = {}));
})(HotmenuApp || (HotmenuApp = {}));
