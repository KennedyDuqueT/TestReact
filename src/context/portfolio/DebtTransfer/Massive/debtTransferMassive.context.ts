import { Context, createContext } from 'react';
import { Action } from '@/utils';
import { State, ContextType } from './debtTransferMassive.types';
import { Types } from './debtTransferMassive.constants';

export const initialState: State = {
  isLoading: false,
  selectedSupplyLotId: 0,
  supplyLots: [],
  supplyPairsList: [],
  selectedPairs: [],
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Types.SET_LOADING:
      return { ...state, isLoading: action.payload };
    case Types.SET_SUPPLY_LOTS:
      return { ...state, supplyLots: [...action.payload] };
    case Types.SET_SELECTED_SUPPLY_LOT:
      return { ...state, selectedSupplyLotId: action.payload };
    case Types.SET_SUPPLY_PAIRS_LIST:
      return { ...state, supplyPairsList: [...action.payload] };
    case Types.SET_SELECTED_PAIRS_TO_TRANSFER:
      return { ...state, selectedPairs: [...action.payload] };
    default:
      return state;
  }
};

export const DebtTransferMassiveContext: Context<ContextType> = createContext(initialState);
