import { Catalog } from '@/models/commons';
import { PosVerifone, PosVerifoneMapped } from '@/models/portfolio';
import { createAction } from '@/utils';

export enum Types {
  SET_ITEMS = 'posVerifoneConfig/setItems',
  SET_SELECTED_ITEM = 'posVerifoneConfig/setSelectedItem',
  SET_ACTION_DIALOG_STATUS = 'posVerifoneConfig/setActionDialogStatus',

  SET_CURRENCY_LIST = 'posVerifoneConfig/catalogs/setCurrencyList',
  SET_TYPE_LIST = 'posVerifoneConfig/catalogs/setTypeList',
  SET_CLOSING_TYPE_LIST = 'posVerifoneConfig/catalogs/setClosingTypeList',
  SET_ACCOUNT_LIST = 'posVerifoneConfig/catalogs/setAccountList',
  SET_BANK_LIST = 'posVerifoneConfig/catalogs/setBankList',
  SET_STATUS_LIST = 'posVerifoneConfig/catalogs/setStatusList',
}

export const reducerActions = {
  setItems: createAction<Types, { items: PosVerifone[]; mappedItems: PosVerifoneMapped[] }>(Types.SET_ITEMS),
  setSelectedItem: createAction<Types, PosVerifone>(Types.SET_SELECTED_ITEM),
  setActionDialogStatus: createAction<Types, { dialogKeyName: string; open: boolean }>(Types.SET_ACTION_DIALOG_STATUS),
  setCurrencyList: createAction<Types, Catalog[]>(Types.SET_CURRENCY_LIST),
  setTypeList: createAction<Types, Catalog[]>(Types.SET_TYPE_LIST),
  setClosingTypeList: createAction<Types, Catalog[]>(Types.SET_CLOSING_TYPE_LIST),
  setAccountList: createAction<Types, Catalog[]>(Types.SET_ACCOUNT_LIST),
  setBankList: createAction<Types, Catalog[]>(Types.SET_BANK_LIST),
  setStatusList: createAction<Types, Catalog[]>(Types.SET_STATUS_LIST),
};
