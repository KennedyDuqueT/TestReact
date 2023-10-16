import { PaymentDealType } from '@/models/portfolio';
import { createAction } from '@/utils';

export enum Types {
  SET_ITEMS = 'paymentDealTypeConfig/setItems',
  SET_SELECTED_ITEM = 'paymentDealTypeConfig/setSelectedItem',
  SET_ACTION_DIALOG_STATUS = 'paymentDealTypeConfig/setActionDialogStatus',
}

export const reducerActions = {
  setItems: createAction<Types, PaymentDealType[]>(Types.SET_ITEMS),
  setSelectedItem: createAction<Types, PaymentDealType>(Types.SET_SELECTED_ITEM),
  setActionDialogStatus: createAction<Types, { dialogKeyName: string; open: boolean }>(Types.SET_ACTION_DIALOG_STATUS),
};
