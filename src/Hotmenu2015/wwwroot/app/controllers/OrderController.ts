﻿module HotmenuApp.Controllers {
    export class OrderController extends BaseController{
        public showOrderDiv: boolean;
        public currentOrder: HotmenuApp.Models.Order;
        static $inject = ['$scope', '$location', 'HotmenuApp.Services.MenuService', '$q', '$window'];
        constructor(private $scope: HotmenuApp.Scopes.IOrderScope, private $location: ng.ILocationService, private menuService: HotmenuApp.Interfaces.IMenuService, private $q: ng.IQService, private $window: ng.IWindowService) {
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
            this.$scope.NewClientName = '';
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
    }
    angular.module("hotmenuApp").controller("HotmenuApp.Controllers.OrderController", OrderController);
}