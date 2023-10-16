import { PosProvider } from '@/models/portfolio';
import { createAction } from '@/utils';

export enum Types {
  SET_ITEMS = 'posProviderConfig/setItems',
  SET_SELECTED_ITEM = 'posProviderConfig/setSelectedItem',
  SET_ACTION_DIALOG_STATUS = 'posProviderConfig/setActionDialogStatus',
}

export const reducerActions = {
  setItems: createAction<Types, PosProvider[]>(Types.SET_ITEMS),
  setSelectedItem: createAction<Types, PosProvider>(Types.SET_SELECTED_ITEM),
  setActionDialogStatus: createAction<Types, { dialogKeyName: string; open: boolean }>(Types.SET_ACTION_DIALOG_STATUS),
};
