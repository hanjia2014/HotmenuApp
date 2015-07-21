module HotmenuApp.Scopes {
    'use strick';
    export interface IBaseScope extends ng.IScope {
        Categories: Array<HotmenuApp.Models.Category>;
        MenuItems: Array<HotmenuApp.Models.MenuItem>;
    }

    export interface IHomeScope extends IBaseScope {
        CurrentOrder: HotmenuApp.Models.Order;
    }

    export interface IMenuScope extends IBaseScope {
        
    }

    export interface IOrderScope extends IBaseScope {
        Order: HotmenuApp.Models.Order;
        NewClientName: string;
    }
}