import { ContextType, State } from './routesManagement.types';
import { Action } from '@/utils';
import { Types } from './routesManagement.constants';
import { Context, createContext } from 'react';

export const initialState: State = {
  cycles: [],
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Types.SET_CYCLES:
      return { ...state, cycles: [...action.payload] };
    default:
      return state;
  }
};

export const RouteManagementContext: Context<ContextType> = createContext(initialState);
