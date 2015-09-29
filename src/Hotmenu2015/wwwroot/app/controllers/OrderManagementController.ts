module HotmenuApp.Controllers {
    import Models = HotmenuApp.Models;
    export class OrderManagementController extends BaseController {
        static $inject = ['$scope', '$location', 'HotmenuApp.Services.MenuService', '$q', '$window', 'orderHub'];
        constructor(private $scope: HotmenuApp.Scopes.IOrderManagementScope, private $location: ng.ILocationService, private menuService: HotmenuApp.Interfaces.IMenuService, private $q: ng.IQService, private $window: ng.IWindowService, private orderHub) {
            super();

            this.menuService.getOrdersPromise().then((result: any) => {
                this.$scope.Orders = result.data;
            });

            this.orderHub.client.updateOrderProcessStatus = (order: Models.Order) => {
                
            };
        }
    }
    angular.module("hotmenuApp").controller("HotmenuApp.Controllers.OrderManagementController", OrderManagementController);
}