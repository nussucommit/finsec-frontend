// Types for APIs go here

interface Token {
  access: string
  refresh: string
}

interface Quotation {
  Event_Name: string;
  Item_Description: string;
  Item_Quantity: number;
  Student_Name: string;
  Obtained_Date: Date;
  Student_Contact_No: number;
  Supplier: string;
}
