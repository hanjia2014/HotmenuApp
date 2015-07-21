module HotmenuApp.Models {
    export class Order {
        public Id: Guid;
        public Time: Date;
        public Items: Array<OrderItem>;
        public ClientNames: Array<string>;
        public Status: string;
        public Note: string;
        public TableNo: number;
        constructor() {
            this.Items = new Array<OrderItem>();
            this.ClientNames = new Array<string>();
        }
        public Total = () => {
            var sum: number;
            this.Items.forEach((item, index) => {
                sum = sum + item.Price;
            });
            return sum;
        };
        public TotalByClientName = (clientName: string) => {
            var sum: number;
            this.Items.forEach((item, index) => {
                if (item.ClientName.toLowerCase() == clientName.toLowerCase())
                    sum = sum + item.Price;
            });
            return sum;
        };
    }
}