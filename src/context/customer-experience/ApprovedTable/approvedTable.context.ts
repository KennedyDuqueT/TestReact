import { Context, createContext } from 'react';
import { Action } from '@/utils';
import { State, ContextType } from './approvedTable.types';
import { Types } from './approvedTable.constants';

export const initialState: State = {
  elecDevices: [],
  subFarmCosts: [],
};

export const reducer = (state: State, action: Action): State => {
  let currentData;
  let index2edit;
  switch (action.type) {
    case Types.SET_ELEC_DEVICES:
      return { ...state, elecDevices: [...action.payload] };
    case Types.SET_SUB_FARM_COST:
      return { ...state, subFarmCosts: [...action.payload] };
    case Types.ADD_ELEC_DEVICE:
      return { ...state, elecDevices: [...(state?.elecDevices || []), action.payload] };
    case Types.REMOVE_ELEC_DEVICE:
      return { ...state, elecDevices: (state?.elecDevices || []).filter((value) => value.id !== action.payload) };
    case Types.EDIT_ELEC_DEVICE:
      currentData = [...(state?.elecDevices || [])];
      index2edit = currentData.findIndex((data) => data.id === action.payload.id);
      currentData[index2edit] = action.payload;
      return { ...state, elecDevices: currentData };
    default:
      return state;
  }
};

export const ApprovedTableRequestContext: Context<ContextType> = createContext(initialState);
