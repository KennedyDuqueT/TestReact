import { generateBillingArchiveInitialValue } from '@/models/billing';
import { Action } from '@/utils';
import { Context, createContext } from 'react';
import { Types } from './generateBillingArchive.constants';
import { ContextType, State } from './generateBillingArchive.types';

export const initialState: State = {
  tableGenerateBillingArchive: generateBillingArchiveInitialValue,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Types.SET_TABLE_GENERATE_BILLING_ARCHIVE:
      return { ...state, tableGenerateBillingArchive: { ...action.payload } };
    default:
      return state;
  }
};

export const GenerateBillingArchiveContext: Context<ContextType> = createContext(initialState);
