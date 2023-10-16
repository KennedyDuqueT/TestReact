import { criticalReadingInitialValue } from '@/models/billing';
import { Action } from '@/utils';
import { Context, createContext } from 'react';
import { ContextType, State } from './criticalReading.types';
import { Types } from './criticalReading.constants';

export const initialState: State = {
  months: [],
  status: [],
  criticalReadingResultOfSearch: criticalReadingInitialValue,
  routes: [],
  serviceTypes: [],
  typesCustomer: [],
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Types.SET_MONTHS:
      return { ...state, months: [...action.payload] };
    case Types.SET_STATUS:
      return { ...state, status: [...action.payload] };
    case Types.SET_ROUTES:
      return { ...state, routes: [...action.payload] };
    case Types.SET_TYPES_CUSTOMER:
      return { ...state, typesCustomer: [...action.payload] };
    case Types.SET_SERVICE_TYPES:
      return { ...state, serviceTypes: [...action.payload] };
    case Types.SET_CRITICAL_READING_RESULT_OF_SEARCH:
      return { ...state, criticalReadingResultOfSearch: { ...action.payload } };
    default:
      return state;
  }
};

export const CriticalReadingContext: Context<ContextType> = createContext(initialState);
