module HotmenuApp.Controllers {
    import Interfaces = HotmenuApp.Interfaces;
    import Models = HotmenuApp.Models;
    import Scopes = HotmenuApp.Scopes;

    export class MenuController extends BaseController{
        public categories: Array<Models.Category>;
        public selectedClientName: string;
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
        }

        addToOrder = () => {
            var clientName = this.utilityService.GetParameterByName<string>("clientName");
            this.$scope.MenuItems.forEach((item, index) => {
                if (item.Selected) {
                    var currentOrder = this.menuService.getCurrentOrder();
                    if (currentOrder == null)
                        currentOrder = new Models.Order();
                    currentOrder.Items.push({ ClientName: '', MenuItemId: item.Id, MenuItemName: item.Name, Price: item.Price, OrderId: null, Id: index + 1 });
                    this.menuService.setCurrentOrder(currentOrder);
                }
            });
        };
    }
    angular.module("hotmenuApp").controller("HotmenuApp.Controllers.MenuController", MenuController);
}