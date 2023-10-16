import { Context, createContext } from 'react';
import { Action } from '@/utils';
import { State, ContextType } from './supplyLot.types';
import { Types } from './supplyLot.constants';
import { LotStatusValues } from '@/models/portfolio';

export const initialState: State = {
  isLoading: false,
  selectedSupplyLotId: 0,
  selectedLot: undefined,
  supplyLots: [],
  supplies: [],
  selectedSupply: undefined,
  openActionDialog: false,
  selectedAction: undefined,
  isPenalizedLot: false,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Types.SET_LOADING:
      return { ...state, isLoading: action.payload };
    case Types.SET_SUPPLY_LOTS:
      return { ...state, supplyLots: [...action.payload] };
    case Types.SET_SELECTED_SUPPLY_LOT: {
      const selectedLot = state.supplyLots.find((lotItem) => lotItem.id === action.payload);

      return {
        ...state,
        selectedLot,
        selectedSupplyLotId: action.payload,
        isPenalizedLot: selectedLot ? selectedLot!.status === LotStatusValues.PENALIZED : false,
      };
    }
    case Types.SET_SUPPLY_LIST:
      return { ...state, supplies: [...action.payload] };
    case Types.SET_SELECTED_SUPPLY:
      return { ...state, selectedSupply: { ...action.payload } };
    case Types.SET_TOGGLE_ACTION_DIALOG:
      return { ...state, openActionDialog: !state.openActionDialog, selectedAction: state.openActionDialog ? undefined : action.payload };
    default:
      return state;
  }
};

export const SupplyLotContext: Context<ContextType> = createContext(initialState);
