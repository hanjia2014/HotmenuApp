module HotmenuApp.Controllers {
    import Interfaces = HotmenuApp.Interfaces;
    import Models = HotmenuApp.Models;
    import Scopes = HotmenuApp.Scopes;

    export class MenuController extends BaseController{
        public categories: Array<Models.Category>;
        public selectedClientName: string;
        private currentOrder: Models.Order;
        static $inject = ['$scope', '$location', 'HotmenuApp.Services.MenuService', '$q', 'HotmenuApp.Services.UtilityService'];
        constructor(private $scope: Scopes.IMenuScope, private $location: ng.ILocationService, private menuService: Interfaces.IMenuService, private $q: ng.IQService, private utilityService: Interfaces.IUtilityService) {
            super();
            this.$q.all([this.menuService.getCategoryPromise().then((result: any) => {
                this.$scope.Categories = result.data;
                this.$scope.Categories.push({ Id: 0, Name: "All" });
            }), this.menuService.getMenuItemPromise().then((result: any) => {
                    this.$scope.MenuItems = result.data;
                })
            ]);
            this.selectedClientName = this.utilityService.GetParameterByName<string>("clientName");
            if (this.selectedClientName) {
                this.currentOrder = this.menuService.getCurrentOrder();
            }
        };

        hasCurrentOrder = () => {
            if (this.menuService.getCurrentOrder())
                return true;
            return false;
        };

        addToOrder = () => {
            this.$scope.MenuItems.forEach((item, index) => {
                if (item.Selected) {
                    if (this.currentOrder == null)
                        this.currentOrder = new Models.Order();
                    this.currentOrder.Items.push({ ClientName: this.selectedClientName, MenuItemId: item.Id, MenuItemName: item.Name, Price: item.Price, OrderId: this.menuService.getCurrentOrder().Id, Id: index + 1 });
                }
            });
            this.menuService.setCurrentOrder(this.currentOrder);
        };
    }
    angular.module("hotmenuApp").controller("HotmenuApp.Controllers.MenuController", MenuController);
}