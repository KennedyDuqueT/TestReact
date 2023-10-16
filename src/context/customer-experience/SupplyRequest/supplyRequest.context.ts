import { Context, createContext } from 'react';
import { Action } from '@/utils';
import { State, ContextType } from './supplyRequest.types';
import { Types } from './supplyRequest.constants';

export const initialState: State = {
  services: [],
  cancelSupply: {
    supplyBalance: '',
    totalBalanceOverdue: '',
    balanceSheetStatus: '',
  },
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Types.SET_SUPPLY_SERVICES:
      return { ...state, services: [...action.payload] };
    case Types.SET_CANCEL_SUPPLY:
      return { ...state, cancelSupply: action.payload };
    default:
      return state;
  }
};

export const SupplyRequestContext: Context<ContextType> = createContext(initialState);
