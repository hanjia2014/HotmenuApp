var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HotmenuApp;
(function (HotmenuApp) {
    var Controllers;
    (function (Controllers) {
        var OrderController = (function (_super) {
            __extends(OrderController, _super);
            function OrderController($scope, $location, menuService, $q, $window, orderHub) {
                var _this = this;
                _super.call(this);
                this.$scope = $scope;
                this.$location = $location;
                this.menuService = menuService;
                this.$q = $q;
                this.$window = $window;
                this.orderHub = orderHub;
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
                this.deleteMenuItem = function (item) {
                    _this.currentOrder = _this.menuService.getCurrentOrder();
                    for (var i = 0; i < _this.currentOrder.Items.length; i++) {
                        var next = _this.currentOrder.Items[i];
                        if (next.MenuItemId == item.MenuItemId && next.MenuItemName == item.MenuItemName) {
                            _this.currentOrder.Items.splice(i, 1);
                        }
                    }
                    _this.menuService.setCurrentOrder(_this.currentOrder);
                };
                this.TotalByClientName = function (clientName) {
                    var sum = 0;
                    _this.currentOrder.Items.forEach(function (item, index) {
                        if (item.ClientName == clientName)
                            sum = sum + item.Price;
                    });
                    return sum;
                };
                this.Submit = function () {
                    _this.currentOrder = _this.menuService.getCurrentOrder();
                    _this.currentOrder.TableNo = _this.$scope.TableNo;
                    var datetime = new Date();
                    var year = datetime.getFullYear();
                    var month = datetime.getMonth() + 1;
                    var date = datetime.getDate();
                    var hour = datetime.getHours();
                    var minutes = datetime.getMinutes();
                    var seconds = datetime.getSeconds();
                    _this.currentOrder.Time = year + '-' + month + '-' + date + ' ' + hour + ':' + minutes + ':' + seconds;
                    var result = _this.menuService.submitOrder(_this.currentOrder);
                    _this.orderHub.server.submitOrder(_this.currentOrder);
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
                this.orderHub.client.updateOrderProcessStatus = function (order) {
                    alert(order);
                };
            }
            OrderController.$inject = ['$scope', '$location', 'HotmenuApp.Services.MenuService', '$q', '$window', 'orderHub'];
            return OrderController;
        })(Controllers.BaseController);
        Controllers.OrderController = OrderController;
        angular.module("hotmenuApp").controller("HotmenuApp.Controllers.OrderController", OrderController);
    })(Controllers = HotmenuApp.Controllers || (HotmenuApp.Controllers = {}));
})(HotmenuApp || (HotmenuApp = {}));
