import { Context, createContext } from 'react';
import { Action } from '@/utils';
import { PosProvider } from '@/models/portfolio';
import { State, ContextType } from './posProviderConfig.types';
import { Types } from './posProviderConfig.constants';

export const initialState: State = {
  items: [],
  selectedItem: {} as PosProvider,
  openCreateDialog: false,
  openUpdateDialog: false,
  openDeleteDialog: false,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Types.SET_ITEMS:
      return { ...state, items: action.payload };
    case Types.SET_SELECTED_ITEM:
      return { ...state, selectedItem: action.payload };
    case Types.SET_ACTION_DIALOG_STATUS:
      return { ...state, [action.payload.dialogKeyName]: action.payload.open };
    default:
      return state;
  }
};

export const PosProviderConfigContext: Context<ContextType> = createContext(initialState);
