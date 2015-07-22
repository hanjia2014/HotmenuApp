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
        var OrderController = (function (_super) {
            __extends(OrderController, _super);
            function OrderController($scope, $location, menuService, $q, $window) {
                var _this = this;
                _super.call(this);
                this.$scope = $scope;
                this.$location = $location;
                this.menuService = menuService;
                this.$q = $q;
                this.$window = $window;
                this.createOrder = function () {
                    _this.menuService.createOrder();
                    _this.showOrderDiv = true;
                    _this.currentOrder = _this.menuService.getCurrentOrder();
                    localStorage.setItem("showOrderDiv", JSON.stringify(_this.showOrderDiv));
                };
                this.deleteOrder = function () {
                    _this.showOrderDiv = false;
                    localStorage.clear();
                };
                this.createClientName = function (clientName) {
                    _this.currentOrder.ClientNames.push(clientName);
                    _this.$scope.NewClientName = '';
                    _this.saveCurrentOrder();
                };
                this.removeClientName = function (index, clientName, removeItems) {
                    for (var i = 0; i < _this.currentOrder.Items.length; i++) {
                        var item = _this.currentOrder.Items[i];
                        if (item.ClientName == clientName) {
                            _this.currentOrder.Items.splice(i, 1);
                        }
                    }
                    _this.currentOrder.ClientNames.splice(index, 1);
                    _this.saveCurrentOrder();
                };
                this.AddOrderItem = function (index, clientName) {
                    _this.$window.location.href = '/home/menu' + '?clientNameIndex=' + index + '&clientName=' + clientName;
                };
                this.saveCurrentOrder = function () {
                    _this.menuService.setCurrentOrder(_this.currentOrder);
                };
                this.$q.all([this.menuService.getCategoryPromise().then(function (result) {
                        _this.$scope.Categories = result.data;
                        _this.$scope.Categories.push({ Id: 0, Name: "All" });
                    }), this.menuService.getMenuItemPromise().then(function (result) {
                        _this.$scope.MenuItems = result.data;
                    })
                ]);
                if (localStorage.getItem("showOrderDiv") != null)
                    this.showOrderDiv = localStorage.getItem("showOrderDiv");
                this.currentOrder = this.menuService.getCurrentOrder();
            }
            OrderController.$inject = ['$scope', '$location', 'HotmenuApp.Services.MenuService', '$q', '$window'];
            return OrderController;
        })(Controllers.BaseController);
        Controllers.OrderController = OrderController;
        angular.module("hotmenuApp").controller("HotmenuApp.Controllers.OrderController", OrderController);
    })(Controllers = HotmenuApp.Controllers || (HotmenuApp.Controllers = {}));
})(HotmenuApp || (HotmenuApp = {}));
