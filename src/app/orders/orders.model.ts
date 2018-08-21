interface Order {
  Id: number;
  CustomerId: string;
  EmployeeId: number;
  Freight: number;
  OrderDate: string;
  RequiredDate: string;
  ShipAddress: string;
  ShipCity: string;
  ShipCountry: string;
  ShipName: string;
  ShipPostalCode: string;
  ShipVia: number;
  ShippedDate: string;
}

interface OrderDetail {
  Discount: number;
  OrderId: number;
  ProductId: number;
  Quantity: number;
  UnitPrice: number;
}

interface Orders {
  Order: Order[]
  OrderDetails: OrderDetail[]
}

export interface OrdersModel {
  Results: Orders[]
}
