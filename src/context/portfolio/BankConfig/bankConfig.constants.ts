import { Bank } from '@/models/portfolio';
import { createAction } from '@/utils';

export enum Types {
  SET_ITEMS = 'bankConfig/setItems',
  SET_SELECTED_ITEM = 'bankConfig/setSelectedItem',
  SET_ACTION_DIALOG_STATUS = 'bankConfig/setActionDialogStatus',
}

export const reducerActions = {
  setItems: createAction<Types, Bank[]>(Types.SET_ITEMS),
  setSelectedItem: createAction<Types, Bank>(Types.SET_SELECTED_ITEM),
  setActionDialogStatus: createAction<Types, { dialogKeyName: string; open: boolean }>(Types.SET_ACTION_DIALOG_STATUS),
};
