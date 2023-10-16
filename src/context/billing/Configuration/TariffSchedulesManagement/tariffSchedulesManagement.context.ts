import { tariffSchedulesInitialValue } from '@/models/billing';
import { ContextType, State } from './tariffSchedulesManagement.types';
import { Action } from '@/utils';
import { Types } from './tariffSchedulesManagement.constants';
import { Context, createContext } from 'react';

export const initialState: State = {
  tariffSchedulesResultOfSearch: tariffSchedulesInitialValue,
  serviceTypes: [],
  currencies: [],
  calculationTypes: [],
  rates: [],
  codesConcept: [],
  realValues: [],
  referenceValues: [],
  typesRate: [],
  status: [],
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Types.SET_CURRENCIES:
      return { ...state, currencies: [...action.payload] };
    case Types.SET_CALCULATION_TYPES:
      return { ...state, calculationTypes: [...action.payload] };
    case Types.SET_RATES:
      return { ...state, rates: [...action.payload] };
    case Types.SET_CODES_CONCEPT:
      return { ...state, codesConcept: [...action.payload] };
    case Types.SET_REAL_VALUES:
      return { ...state, realValues: [...action.payload] };
    case Types.SET_REFERENCE_VALUES:
      return { ...state, referenceValues: [...action.payload] };
    case Types.SET_TYPES_RATE:
      return { ...state, typesRate: [...action.payload] };
    case Types.SET_STATUS:
      return { ...state, status: [...action.payload] };
    case Types.SET_SERVICE_TYPES:
      return { ...state, serviceTypes: [...action.payload] };
    case Types.SET_TARIFF_SCHEDULES_RESULT_OF_SEARCH:
      return { ...state, tariffSchedulesResultOfSearch: { ...action.payload } };
    default:
      return state;
  }
};

export const TariffSchedulesManagementContext: Context<ContextType> = createContext(initialState);
