import { Context, createContext } from 'react';
import { Action } from '@/utils';
import { CashRegister } from '@/models/portfolio';
import { State, ContextType } from './cashRegisterConfig.types';
import { Types } from './cashRegisterConfig.constants';
import { mapCashRegisterItems } from './helpers';

export const initialState: State = {
  items: [],
  mappedItems: [],
  selectedItem: {} as CashRegister,
  openCreateDialog: false,
  openUpdateDialog: false,
  openDeleteDialog: false,
  catalogs: {
    currencies: [],
    types: [],
    closingTypes: [],
    accounts: [],
    banks: [],
    status: [],
  },
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Types.SET_ITEMS:
      return { ...state, items: action.payload, mappedItems: mapCashRegisterItems(action.payload, state.catalogs) };
    case Types.SET_SELECTED_ITEM:
      return { ...state, selectedItem: action.payload };
    case Types.SET_ACTION_DIALOG_STATUS:
      return { ...state, [action.payload.dialogKeyName]: action.payload.open };
    case Types.SET_CURRENCY_LIST:
      return {
        ...state,
        catalogs: {
          ...state.catalogs,
          currencies: action.payload,
        },
      };
    case Types.SET_TYPE_LIST:
      return {
        ...state,
        catalogs: {
          ...state.catalogs,
          types: action.payload,
        },
      };
    case Types.SET_CLOSING_TYPE_LIST:
      return {
        ...state,
        catalogs: {
          ...state.catalogs,
          closingTypes: action.payload,
        },
      };
    case Types.SET_ACCOUNT_LIST:
      return {
        ...state,
        catalogs: {
          ...state.catalogs,
          accounts: action.payload,
        },
      };
    case Types.SET_BANK_LIST:
      return {
        ...state,
        catalogs: {
          ...state.catalogs,
          banks: action.payload,
        },
      };
    case Types.SET_STATUS_LIST:
      return {
        ...state,
        catalogs: {
          ...state.catalogs,
          status: action.payload,
        },
      };
    default:
      return state;
  }
};

export const CashRegisterConfigContext: Context<ContextType> = createContext(initialState);
