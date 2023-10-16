import { CatalogModel, ResponseObj, DataRequest } from '@/models/customer-experience';

export interface State {
  pdfInvoice: string;
  catalogContractTypes: CatalogModel[];
}

export interface Actions {
  getUrlPdfInvoice: (data: DataRequest) => Promise<ResponseObj>;
  getCatalogs: () => Promise<void>;
}

export interface ContextType extends State {
  actions?: Actions;
}
