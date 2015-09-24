module HotmenuApp.Controllers {
    export class OrderController extends BaseController{
        public showOrderDiv: boolean;
        public currentOrder: HotmenuApp.Models.Order;
        static $inject = ['$scope', '$location', 'HotmenuApp.Services.MenuService', '$q', '$window', 'orderHub'];
        constructor(private $scope: HotmenuApp.Scopes.IOrderScope, private $location: ng.ILocationService, private menuService: HotmenuApp.Interfaces.IMenuService, private $q: ng.IQService, private $window: ng.IWindowService, private orderHub) {
            super();
            this.$q.all([this.menuService.getCategoryPromise().then((result: any) => {
                this.$scope.Categories = result.data;
                this.$scope.Categories.push({ Id: 0, Name: "All" });
            }), this.menuService.getMenuItemPromise().then((result: any) => {
                    this.$scope.MenuItems = result.data;
                })
            ]);

            if (localStorage.getItem("showOrderDiv") != null)
                this.showOrderDiv = localStorage.getItem("showOrderDiv");

            this.currentOrder = this.menuService.getCurrentOrder();



            this.orderHub.client.updateOrderProcessStatus = (order: string) => {
                alert("The order has been submitted");
            };
        }

        createOrder = () => {
            this.menuService.createOrder();
            this.showOrderDiv = true;
            this.currentOrder = this.menuService.getCurrentOrder();
            localStorage.setItem("showOrderDiv", JSON.stringify(this.showOrderDiv));
        };

        deleteOrder = () => {
            this.showOrderDiv = false;
            localStorage.clear();
        };

        createClientName = (clientName: string) => {
            this.currentOrder.ClientNames.push(clientName);
            this.saveCurrentOrder();
        };

        removeClientName = (index: number, clientName: string, removeItems: boolean) => {

            for (var i = 0; i < this.currentOrder.Items.length; i++) {
                var item = this.currentOrder.Items[i];
                if (item.ClientName == clientName) {
                    this.currentOrder.Items.splice(i, 1);
                }
            }

            this.currentOrder.ClientNames.splice(index, 1);
            this.saveCurrentOrder();
        };

        AddOrderItem = (index: number, clientName: string) => {
            this.$window.location.href = '/home/menu' + '?clientNameIndex=' + index + '&clientName=' + clientName;
        };

        private saveCurrentOrder = () => {
            this.menuService.setCurrentOrder(this.currentOrder);
        };

        deleteMenuItem = (item: Models.OrderItem) => {
            this.currentOrder = this.menuService.getCurrentOrder();

            for (var i = 0; i < this.currentOrder.Items.length; i++) {
                var next = this.currentOrder.Items[i];
                if (next.MenuItemId == item.MenuItemId && next.MenuItemName == item.MenuItemName) {
                    this.currentOrder.Items.splice(i, 1);
                }
            }

            this.menuService.setCurrentOrder(this.currentOrder);
        };

        TotalByClientName = (clientName: string) => {
            var sum: number = 0;
            this.currentOrder.Items.forEach((item, index) => {
                if (item.ClientName == clientName)
                    sum = sum + item.Price;
            });
            return sum;
        };

        Submit = () => {
            this.currentOrder = this.menuService.getCurrentOrder();
            this.currentOrder.TableNo = this.$scope.TableNo;
            this.currentOrder.Status = Models.OrderStatus.Submitted;
            var datetime = new Date();
            var year = datetime.getFullYear();
            var month = datetime.getMonth() + 1;
            var date = datetime.getDate();
            var hour = datetime.getHours();
            var minutes = datetime.getMinutes();
            var seconds = datetime.getSeconds();

            this.currentOrder.Time = year + '-' + month + '-' + date + ' ' + hour + ':' + minutes + ':' + seconds;
            var result = this.menuService.submitOrder(this.currentOrder);

            //this.orderHub.server.submitOrder(this.currentOrder);
        };
    }
    angular.module("hotmenuApp").controller("HotmenuApp.Controllers.OrderController", OrderController);
}