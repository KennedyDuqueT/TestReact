import { Context, createContext } from 'react';
import { Action } from '@/utils';
import { PosVerifone } from '@/models/portfolio';
import { State, ContextType } from './posVerifoneConfig.types';
import { Types } from './posVerifoneConfig.constants';

export const initialState: State = {
  items: [],
  mappedItems: [],
  selectedItem: {} as PosVerifone,
  openCreateDialog: false,
  openUpdateDialog: false,
  openDeleteDialog: false,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Types.SET_ITEMS:
      return { ...state, items: action.payload.items, mappedItems: action.payload.mappedItems };
    case Types.SET_SELECTED_ITEM:
      return { ...state, selectedItem: action.payload };
    case Types.SET_ACTION_DIALOG_STATUS:
      return { ...state, [action.payload.dialogKeyName]: action.payload.open };
    default:
      return state;
  }
};

export const PosVerifoneConfigContext: Context<ContextType> = createContext(initialState);
