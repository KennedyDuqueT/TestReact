import { LotStatus } from '@/models/portfolio';
import { createAction } from '@/utils';

export enum Types {
  SET_ITEMS = 'lotStatusConfig/setItems',
  SET_SELECTED_ITEM = 'lotStatusConfig/setSelectedItem',
  SET_ACTION_DIALOG_STATUS = 'lotStatusConfig/setActionDialogStatus',
}

export const reducerActions = {
  setItems: createAction<Types, LotStatus[]>(Types.SET_ITEMS),
  setSelectedItem: createAction<Types, LotStatus>(Types.SET_SELECTED_ITEM),
  setActionDialogStatus: createAction<Types, { dialogKeyName: string; open: boolean }>(Types.SET_ACTION_DIALOG_STATUS),
};
