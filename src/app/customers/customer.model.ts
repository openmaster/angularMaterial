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
}

export interface CustomersModel{
  Customers: Customer[]
}
