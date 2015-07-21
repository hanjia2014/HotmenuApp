module HotmenuApp.Models {
    export class OrderItem {
        public Id: number;
        public MenuItemId: number;
        public OrderId: Guid;
        public MenuItemName: string;
        public ClientName: string;
        public Price: number;

        constructor(orderId: Guid) {
            this.OrderId = orderId;
        }
    }
}