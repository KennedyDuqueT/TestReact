import { CashRegisterStatus } from '@/models/portfolio';
import { createAction } from '@/utils';

export enum Types {
  SET_ITEMS = 'cashRegisterStatusConfig/setItems',
  SET_SELECTED_ITEM = 'cashRegisterStatusConfig/setSelectedItem',
  SET_ACTION_DIALOG_STATUS = 'cashRegisterStatusConfig/setActionDialogStatus',
}

export const reducerActions = {
  setItems: createAction<Types, CashRegisterStatus[]>(Types.SET_ITEMS),
  setSelectedItem: createAction<Types, CashRegisterStatus>(Types.SET_SELECTED_ITEM),
  setActionDialogStatus: createAction<Types, { dialogKeyName: string; open: boolean }>(Types.SET_ACTION_DIALOG_STATUS),
};
