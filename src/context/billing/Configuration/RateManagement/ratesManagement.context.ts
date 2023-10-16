import { ContextType, State } from './ratesManagement.types';
import { Action } from '@/utils';
import { Context, createContext } from 'react';
import { Types } from './ratesManagement.constants';

export const initialState: State = {
  rateTypes: [],
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Types.SET_RATE_TYPES:
      return { ...state, rateTypes: [...action.payload] };
    default:
      return state;
  }
};

export const RateManagementContext: Context<ContextType> = createContext(initialState);
