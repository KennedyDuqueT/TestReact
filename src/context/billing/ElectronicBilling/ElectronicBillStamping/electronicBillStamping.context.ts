import { ContextType, State } from './electronicBillStamping.types';
import { Action } from '@/utils';
import { Types } from './electronicBillStamping.constants';
import { Context, createContext } from 'react';

export const initialState: State = {
  cycles: [],
  routes: [],
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Types.SET_CYCLES:
      return { ...state, cycles: [...action.payload] };
    case Types.SET_ROUTES:
      return { ...state, routes: [...action.payload] };
    default:
      return state;
  }
};

export const ElectronicBillStampingContext: Context<ContextType> = createContext(initialState);
