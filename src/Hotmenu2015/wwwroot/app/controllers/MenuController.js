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
        var Models = HotmenuApp.Models;
        var MenuController = (function (_super) {
            __extends(MenuController, _super);
            function MenuController($scope, $location, menuService, $q, utilityService) {
                var _this = this;
                _super.call(this);
                this.$scope = $scope;
                this.$location = $location;
                this.menuService = menuService;
                this.$q = $q;
                this.utilityService = utilityService;
                this.hasCurrentOrder = function () {
                    if (_this.menuService.getCurrentOrder())
                        return true;
                    return false;
                };
                this.addToOrder = function () {
                    _this.$scope.MenuItems.forEach(function (item, index) {
                        if (item.Selected) {
                            if (_this.currentOrder == null)
                                _this.currentOrder = new Models.Order();
                            _this.currentOrder.Items.push({ ClientName: _this.selectedClientName, MenuItemId: item.Id, MenuItemName: item.Name, Price: item.Price, OrderId: _this.menuService.getCurrentOrder().Id, Id: index + 1 });
                        }
                    });
                    _this.menuService.setCurrentOrder(_this.currentOrder);
                };
                this.addToOrderWithClientName = function (newClientName) {
                    _this.currentOrder.ClientNames.push(newClientName);
                    _this.selectedClientName = newClientName;
                    _this.addToOrder();
                };
                this.$q.all([this.menuService.getCategoryPromise().then(function (result) {
                        _this.$scope.Categories = result.data;
                        _this.$scope.Categories.push({ Id: 0, Name: "All" });
                    }), this.menuService.getMenuItemPromise().then(function (result) {
                        _this.$scope.MenuItems = result.data;
                    })
                ]);
                this.selectedClientName = this.utilityService.GetParameterByName("clientName");
                if (this.menuService.getCurrentOrder() != null) {
                    this.currentOrder = this.menuService.getCurrentOrder();
                }
                this.$scope.SetClientNameFlag = function (flag) {
                    _this.$scope.AddNewClientName = flag;
                };
            }
            ;
            MenuController.$inject = ['$scope', '$location', 'HotmenuApp.Services.MenuService', '$q', 'HotmenuApp.Services.UtilityService'];
            return MenuController;
        })(Controllers.BaseController);
        Controllers.MenuController = MenuController;
        angular.module("hotmenuApp").controller("HotmenuApp.Controllers.MenuController", MenuController);
    })(Controllers = HotmenuApp.Controllers || (HotmenuApp.Controllers = {}));
})(HotmenuApp || (HotmenuApp = {}));
