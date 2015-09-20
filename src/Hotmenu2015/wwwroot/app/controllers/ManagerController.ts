module HotmenuApp.Controllers {
    export class ManagerController extends BaseController{
        public showOrderDiv: boolean;
        public currentOrder: HotmenuApp.Models.Order;
        static $inject = ['$scope', '$location', 'HotmenuApp.Services.MenuService', '$q', '$window', 'orderHub'];
        constructor(private $scope: HotmenuApp.Scopes.IOrderScope, private $location: ng.ILocationService, private menuService: HotmenuApp.Interfaces.IMenuService, private $q: ng.IQService, private $window: ng.IWindowService, private orderHub) {
            super();
            this.orderHub.client.updateOrderProcessStatus = (order: string) => {
                alert(order);
            };

            this.$q.all([this.menuService.getOrdersPromise().then((result: any) => {
                this.$scope.Orders = result.data;
            })]);
        }
    }
    angular.module("hotmenuApp").controller("HotmenuApp.Controllers.ManagerController", ManagerController);
}