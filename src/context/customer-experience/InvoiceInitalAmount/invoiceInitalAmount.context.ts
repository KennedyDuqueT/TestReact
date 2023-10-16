import { Context, createContext } from 'react';
import { Action } from '@/utils';
import { State, ContextType } from './invoiceInitialAmount.types';
import { Types } from './invoiceInitalAmount.constants';

export const initialState: State = {
  pdfInvoice: '',
  catalogContractTypes: [],
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Types.SET_PDF_INVOICE:
      return { ...state, pdfInvoice: action.payload };
    case Types.SET_CATALOG_CONTRACT_TYPE:
      return { ...state, catalogContractTypes: action.payload };
    default:
      return state;
  }
};

export const InvoiceInitialAmountContext: Context<ContextType> = createContext(initialState);
