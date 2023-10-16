import { provisionalBillingInitialValue } from '@/models/billing';
import { Action } from '@/utils';
import { Context, createContext } from 'react';
import { ContextType, State } from './provisionalBilling.types';
import { Types } from './provisionalBilling.constants';

export const initialState: State = {
  months: [],
  provisionalBillingResultOfSearch: provisionalBillingInitialValue,
  typesCustomer: [],
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Types.SET_MONTHS:
      return { ...state, months: [...action.payload] };
    case Types.SET_TYPES_CUSTOMER:
      return { ...state, typesCustomer: [...action.payload] };
    case Types.SET_PROVISIONAL_BILLING_RESULT_OF_SEARCH:
      return { ...state, provisionalBillingResultOfSearch: { ...action.payload } };
    default:
      return state;
  }
};

export const ProvisionalBillingContext: Context<ContextType> = createContext(initialState);
