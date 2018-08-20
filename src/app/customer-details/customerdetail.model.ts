interface Customer {
      Id: string;
      ContactName: string;
      ContactTitle: string;
      CompanyName: string;
      Phone: string;
      Fax: string;
      Address: string;
      City: string;
      Country: string;
      PostalCode: string;
};

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

interface CustomerOrders {
  Order: Order[]
  OrderDetails: OrderDetail[]
}

export interface CustomersDetailModel{
  Customer: Customer[]
  CustomerOrders: CustomerOrders[];
}
