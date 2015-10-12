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
                this.$scope.$apply(() => {
                    this.$scope.Orders.push(order);
                });
            };

            this.$scope.StatusOptions = [{ Text: "Submitted", Value: "Submitted", HasChanged: false }, { Text: "In Progress", Value: "InProgress", HasChanged: false }, { Text: "Completed", Value: "Completed", HasChanged: false }];
        }

        SetSelectedOrder = (id: string) => {
            for (var i = 0; i < this.$scope.Orders.length; i++) {
                var order = this.$scope.Orders[i];
                if (order.Id == id)
                    this.$scope.SelectedOrder = order;
            }
        };

        StatusChanged = (order: Models.Order) => {
            var isdirty = order.Status;
            this.menuService.updateOrder(order.Id, order);
        };

        printOrder = (divID: string) => {
            //Get the HTML of div
            var divElements = document.getElementById(divID).innerHTML;
            //Get the HTML of whole page
            var oldPage = document.body.innerHTML;

            //Reset the page's HTML with div's HTML only
            document.body.innerHTML =
            "<html><head><title></title></head><body>" +
            divElements + "</body>";

            //Print Page
            window.print();

            //Restore orignal HTML
            document.body.innerHTML = oldPage;

        };
    }
    angular.module("hotmenuApp").controller("HotmenuApp.Controllers.OrderManagementController", OrderManagementController);
}