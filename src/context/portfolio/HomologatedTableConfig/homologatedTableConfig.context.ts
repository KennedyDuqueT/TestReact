import { Context, createContext } from 'react';
import { Action } from '@/utils';
import { HomologatedTableDevice } from '@/models/portfolio';
import { State, ContextType } from './homologatedTableConfig.types';
import { Types } from './homologatedTableConfig.constants';

export const initialState: State = {
  items: [],
  selectedItem: {} as HomologatedTableDevice,
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

export const HomologatedTableConfigContext: Context<ContextType> = createContext(initialState);
