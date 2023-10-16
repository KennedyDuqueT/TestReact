import { ContextType, State } from './dataMastersManagement.types';
import { Action } from '@/utils';
import { Types } from './dataMastersManagement.constants';
import { Context, createContext } from 'react';

export const initialState: State = {
  billingModes: [],
  frequencies: [],
  sectors: [],
  serviceTypes: [],
  zones: [],
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Types.SET_BILLING_MODES:
      return { ...state, billingModes: [...action.payload] };
    case Types.SET_FREQUENCIES:
      return { ...state, frequencies: [...action.payload] };
    case Types.SET_SECTORS:
      return { ...state, sectors: [...action.payload] };
    case Types.SET_SERVICE_TYPES:
      return { ...state, serviceTypes: [...action.payload] };
    case Types.SET_ZONES:
      return { ...state, zones: [...action.payload] };
    default:
      return state;
  }
};

export const DataMastersManagementContext: Context<ContextType> = createContext(initialState);
