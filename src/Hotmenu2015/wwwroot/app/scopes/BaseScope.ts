module HotmenuApp.Scopes {
    'use strick';
    import Models = HotmenuApp.Models;
    export interface IBaseScope extends ng.IScope {
        Categories: Array<HotmenuApp.Models.Category>;
        MenuItems: Array<HotmenuApp.Models.MenuItem>;
    }

    export interface IHomeScope extends IBaseScope {
        CurrentOrder: HotmenuApp.Models.Order;
    }

    export interface IMenuScope extends IBaseScope {
        NewClientName: string;
        AddNewClientName: boolean;
        SetClientNameFlag: (boolean) => void;
    }

    export interface IOrderScope extends IBaseScope {
        Order: Models.Order;
        Orders: Array<Models.Order>;
        NewClientName: string;
        TableNo: number;
        SubmittedCount: number;
    }

    export interface IOrderManagementScope extends IBaseScope {
        Orders: Array<Models.Order>;
    }
}