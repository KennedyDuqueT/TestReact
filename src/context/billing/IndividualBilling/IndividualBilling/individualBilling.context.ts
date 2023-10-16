import { Action } from '@/utils';
import { Context, createContext } from 'react';
import { ContextType, State } from './individualBilling.types';
import { Types } from './individualBilling.constants';

export const initialState: State = {
  months: [],
  serviceTypes: [],
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Types.SET_MONTHS:
      return { ...state, months: [...action.payload] };
    case Types.SET_SERVICE_TYPES:
      return { ...state, serviceTypes: [...action.payload] };
    default:
      return state;
  }
};

export const IndividualBillingContext: Context<ContextType> = createContext(initialState);
