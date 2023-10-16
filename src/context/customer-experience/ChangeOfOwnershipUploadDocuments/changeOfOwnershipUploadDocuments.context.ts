import { Context, createContext } from 'react';
import { Action } from '@/utils';
import { State, ContextType } from './changeOfOwnershipUploadDocuments.types';
import { Types } from './changeOfOwnershipUploadDocuments.constants';

export const initialState: State = {
  catalogCustomerType: [],
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Types.SET_CATALOG_CUSTOMER_TYPE:
      return { ...state, catalogCustomerType: action.payload };
    default:
      return state;
  }
};

export const ChangeOfOwnershipUploadDocumentsContext: Context<ContextType> = createContext(initialState);
