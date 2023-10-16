import { Company } from '@/models/commons';
import { SupplyForOperation, OrderType, Reason, Invoice } from '@/models/portfolio';
import { createAction } from '@/utils';

export enum Types {
  SET_LOADING = 'partialOperation/setLoading',
  SET_SELECTED_SUPPLY = 'partialOperation/setSelectedSupply',
  SET_INVOICE_LIST = 'partialOperation/setInvoiceList',
  SET_COMPANIES = 'partialOperation/setCompanies',
  SET_ORDER_TYPES = 'partialOperation/setOrderTypes',
  SET_REASONS = 'partialOperation/setReasons',
  SET_SELECTED_INVOICES = 'partialOperation/setSelectedInvoices',
}

export const reducerActions = {
  setLoading: createAction<Types, boolean>(Types.SET_LOADING),
  setSelectedSupply: createAction<Types, SupplyForOperation>(Types.SET_SELECTED_SUPPLY),
  setInvoiceList: createAction<Types, Invoice[]>(Types.SET_INVOICE_LIST),
  setCompanies: createAction<Types, Company[]>(Types.SET_COMPANIES),
  setOrderTypes: createAction<Types, OrderType[]>(Types.SET_ORDER_TYPES),
  setReasons: createAction<Types, Reason[]>(Types.SET_REASONS),
  setSelectedInvoices: createAction<Types, number[]>(Types.SET_SELECTED_INVOICES),
};
