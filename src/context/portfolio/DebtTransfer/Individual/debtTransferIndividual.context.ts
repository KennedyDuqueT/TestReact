import { Context, createContext } from 'react';
import { Action } from '@/utils';
import { State, ContextType } from './debtTransferIndividual.types';
import { Types } from './debtTransferIndividual.constants';
import { SupplyStatusValues } from '@/models/portfolio';

export const initialState: State = {
  isLoading: false,
  client: '',
  debtSupplies: [],
  destinationSupplies: [],
  selectedSupplies: {
    debt: 0,
    destination: 0,
  },
  supplyPairsList: [
    {
      id: 1,
      debtSupplyNumber: 'A1234567890',
      destinationSupplyNumber: 'B1234567890',
      amountLate: 8500.35,
      status: SupplyStatusValues.ACTIVE,
    },
  ],
  selectedPairs: [],
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Types.SET_LOADING:
      return { ...state, isLoading: action.payload };
    case Types.SET_CLIENT:
      return { ...state, client: action.payload };
    case Types.SET_DEBT_SUPPLIES:
      return { ...state, debtSupplies: [...action.payload] };
    case Types.SET_DESTINATION_SUPPLIES:
      return { ...state, destinationSupplies: action.payload };
    case Types.SET_SELECTED_DEBT_SUPPLY:
      return { ...state, selectedSupplies: { ...state.selectedSupplies, debt: action.payload } };
    case Types.SET_SELECTED_DESTINATION_SUPPLY:
      return { ...state, selectedSupplies: { ...state.selectedSupplies, destination: action.payload } };
    case Types.SET_SUPPLY_PAIRS_LIST:
      return { ...state, supplyPairsList: [...action.payload] };
    default:
      return state;
  }
};

export const DebtTransferIndividualContext: Context<ContextType> = createContext(initialState);
