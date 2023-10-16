import { Catalog } from '@/models/commons';
import { CashRegister } from '@/models/portfolio';
import { createAction } from '@/utils';

export enum Types {
  SET_ITEMS = 'cashRegisterConfig/setItems',
  SET_SELECTED_ITEM = 'cashRegisterConfig/setSelectedItem',
  SET_ACTION_DIALOG_STATUS = 'cashRegisterConfig/setActionDialogStatus',

  SET_CURRENCY_LIST = 'cashRegisterConfig/catalogs/setCurrencyList',
  SET_TYPE_LIST = 'cashRegisterConfig/catalogs/setTypeList',
  SET_CLOSING_TYPE_LIST = 'cashRegisterConfig/catalogs/setClosingTypeList',
  SET_ACCOUNT_LIST = 'cashRegisterConfig/catalogs/setAccountList',
  SET_BANK_LIST = 'cashRegisterConfig/catalogs/setBankList',
  SET_STATUS_LIST = 'cashRegisterConfig/catalogs/setStatusList',
}

export const reducerActions = {
  setItems: createAction<Types, CashRegister[]>(Types.SET_ITEMS),
  setSelectedItem: createAction<Types, CashRegister>(Types.SET_SELECTED_ITEM),
  setActionDialogStatus: createAction<Types, { dialogKeyName: string; open: boolean }>(Types.SET_ACTION_DIALOG_STATUS),
  setCurrencyList: createAction<Types, Catalog[]>(Types.SET_CURRENCY_LIST),
  setTypeList: createAction<Types, Catalog[]>(Types.SET_TYPE_LIST),
  setClosingTypeList: createAction<Types, Catalog[]>(Types.SET_CLOSING_TYPE_LIST),
  setAccountList: createAction<Types, Catalog[]>(Types.SET_ACCOUNT_LIST),
  setBankList: createAction<Types, Catalog[]>(Types.SET_BANK_LIST),
  setStatusList: createAction<Types, Catalog[]>(Types.SET_STATUS_LIST),
};
