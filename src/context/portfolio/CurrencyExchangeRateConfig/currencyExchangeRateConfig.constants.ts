import { CurrencyExchangeRate } from '@/models/portfolio';
import { createAction } from '@/utils';

export enum Types {
  SET_ITEMS = 'currencyExchangeRateConfig/setItems',
  SET_SELECTED_ITEM = 'currencyExchangeRateConfig/setSelectedItem',
  SET_ACTION_DIALOG_STATUS = 'currencyExchangeRateConfig/setActionDialogStatus',
}

export const reducerActions = {
  setItems: createAction<Types, CurrencyExchangeRate[]>(Types.SET_ITEMS),
  setSelectedItem: createAction<Types, CurrencyExchangeRate>(Types.SET_SELECTED_ITEM),
  setActionDialogStatus: createAction<Types, { dialogKeyName: string; open: boolean }>(Types.SET_ACTION_DIALOG_STATUS),
};
