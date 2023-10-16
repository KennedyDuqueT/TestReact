import { ContextType, State } from './conceptManagement.types';
import { Action } from '@/utils';
import { Types } from './conceptManagement.constants';
import { Context, createContext } from 'react';

export const initialState: State = {
  chargeType: [],
  natureConcept: [],
  taxConcept: [],
  unitsMeasure: [],
  calculationMethod: [],
  calculationType: [],
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Types.SET_CHARGE_TYPE:
      return { ...state, chargeType: [...action.payload] };
    case Types.SET_NATURE_CONCEPT:
      return { ...state, natureConcept: [...action.payload] };
    case Types.SET_TAX_CONCEPT:
      return { ...state, taxConcept: [...action.payload] };
    case Types.SET_UNITS_MEASURE:
      return { ...state, unitsMeasure: [...action.payload] };
    case Types.SET_CALCULATION_METHOD:
      return { ...state, calculationMethod: [...action.payload] };
    case Types.SET_CALCULATION_TYPE:
      return { ...state, calculationType: [...action.payload] };
    default:
      return state;
  }
};

export const ConceptManagementContext: Context<ContextType> = createContext(initialState);
