import { HomologatedTableDevice } from '@/models/portfolio';
import { createAction } from '@/utils';

export enum Types {
  SET_ITEMS = 'homologatedTableConfig/setItems',
  SET_SELECTED_ITEM = 'homologatedTableConfig/setSelectedItem',
  SET_ACTION_DIALOG_STATUS = 'homologatedTableConfig/setActionDialogStatus',
}

export const reducerActions = {
  setItems: createAction<Types, HomologatedTableDevice[]>(Types.SET_ITEMS),
  setSelectedItem: createAction<Types, HomologatedTableDevice>(Types.SET_SELECTED_ITEM),
  setActionDialogStatus: createAction<Types, { dialogKeyName: string; open: boolean }>(Types.SET_ACTION_DIALOG_STATUS),
};
