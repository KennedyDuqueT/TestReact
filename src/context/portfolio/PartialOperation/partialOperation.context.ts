import { Context, createContext } from 'react';
import { Action } from '@/utils';
import { SupplyForOperation } from '@/models/portfolio';
import { State, ContextType } from './partialOperation.types';
import { Types } from './partialOperation.constants';

export const initialState: State = {
  isLoading: false,
  invoiceList: [],
  companies: [],
  orderTypes: [],
  reasons: [],
  selectedSupply: {} as SupplyForOperation,
  selectedInvoices: [],
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Types.SET_LOADING:
      return { ...state, isLoading: action.payload };
    case Types.SET_SELECTED_SUPPLY:
      return { ...state, selectedSupply: { ...action.payload } };
    case Types.SET_INVOICE_LIST:
      return { ...state, invoiceList: [...action.payload] };
    case Types.SET_COMPANIES:
      return { ...state, companies: action.payload };
    case Types.SET_ORDER_TYPES:
      return { ...state, orderTypes: action.payload };
    case Types.SET_REASONS:
      return { ...state, reasons: action.payload };
    case Types.SET_SELECTED_INVOICES:
      return { ...state, selectedInvoices: [...action.payload] };
    default:
      return state;
  }
};

export const PartialOperationContext: Context<ContextType> = createContext(initialState);
