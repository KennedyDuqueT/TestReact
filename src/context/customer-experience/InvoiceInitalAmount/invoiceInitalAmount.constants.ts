import { createAction } from '@/utils';
import { CatalogModel } from '@/models/customer-experience';

export enum Types {
  SET_PDF_INVOICE = 'invoiceInitialAmount/setPdfInvoice',

  // Set Catalogs
  SET_CATALOG_CONTRACT_TYPE = 'paperworks/setCatalogContractType',
}

export const reducerActions = {
  setPdfInvoice: createAction<Types, string>(Types.SET_PDF_INVOICE),
  setCatalogContractType: createAction<Types, CatalogModel[]>(Types.SET_CATALOG_CONTRACT_TYPE),
};
