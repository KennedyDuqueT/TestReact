import { Context, createContext } from 'react';
import { Action } from '@/utils';
import { PaymentDealType } from '@/models/portfolio';
import { State, ContextType } from './paymentDealTypeConfig.types';
import { Types } from './paymentDealTypeConfig.constants';

export const initialState: State = {
  items: [],
  selectedItem: {} as PaymentDealType,
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

export const PaymentDealTypeConfigContext: Context<ContextType> = createContext(initialState);
