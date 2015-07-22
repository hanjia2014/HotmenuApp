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
                this.addToOrder = function () {
                    var clientName = _this.utilityService.GetParameterByName("clientName");
                    _this.$scope.MenuItems.forEach(function (item, index) {
                        if (item.Selected) {
                            var currentOrder = _this.menuService.getCurrentOrder();
                            if (currentOrder == null)
                                currentOrder = new Models.Order();
                            currentOrder.Items.push({ ClientName: '', MenuItemId: item.Id, MenuItemName: item.Name, Price: item.Price, OrderId: null, Id: index + 1 });
                            _this.menuService.setCurrentOrder(currentOrder);
                        }
                    });
                };
                this.$q.all([this.menuService.getCategoryPromise().then(function (result) {
                        _this.$scope.Categories = result.data;
                        _this.$scope.Categories.push({ Id: 0, Name: "All" });
                    }), this.menuService.getMenuItemPromise().then(function (result) {
                        _this.$scope.MenuItems = result.data;
                    })
                ]);
            }
            MenuController.$inject = ['$scope', '$location', 'HotmenuApp.Services.MenuService', '$q', 'HotmenuApp.Services.UtilityService'];
            return MenuController;
        })(Controllers.BaseController);
        Controllers.MenuController = MenuController;
        angular.module("hotmenuApp").controller("HotmenuApp.Controllers.MenuController", MenuController);
    })(Controllers = HotmenuApp.Controllers || (HotmenuApp.Controllers = {}));
})(HotmenuApp || (HotmenuApp = {}));
