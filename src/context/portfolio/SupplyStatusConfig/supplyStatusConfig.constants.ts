import { SupplyStatus } from '@/models/portfolio';
import { createAction } from '@/utils';

export enum Types {
  SET_ITEMS = 'supplyStatusConfig/setItems',
  SET_SELECTED_ITEM = 'supplyStatusConfig/setSelectedItem',
  SET_ACTION_DIALOG_STATUS = 'supplyStatusConfig/setActionDialogStatus',
}

export const reducerActions = {
  setItems: createAction<Types, SupplyStatus[]>(Types.SET_ITEMS),
  setSelectedItem: createAction<Types, SupplyStatus>(Types.SET_SELECTED_ITEM),
  setActionDialogStatus: createAction<Types, { dialogKeyName: string; open: boolean }>(Types.SET_ACTION_DIALOG_STATUS),
};
