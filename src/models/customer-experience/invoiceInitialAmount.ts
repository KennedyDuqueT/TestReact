export interface CatalogModel {
  id: number;
  name: string;
  description: string;
}

export interface DataRequest {
  contractType: number;
  invoiceUnitAmount: string;
  nameBusinessName: string;
  supplyNumber: string;
}
