import { InvoiceStatusType } from '@/models/portfolio';
import { createAction } from '@/utils';

export enum Types {
  SET_ITEMS = 'invoiceStatusTypeConfig/setItems',
  SET_SELECTED_ITEM = 'invoiceStatusTypeConfig/setSelectedItem',
  SET_ACTION_DIALOG_STATUS = 'invoiceStatusTypeConfig/setActionDialogStatus',
}

export const reducerActions = {
  setItems: createAction<Types, InvoiceStatusType[]>(Types.SET_ITEMS),
  setSelectedItem: createAction<Types, InvoiceStatusType>(Types.SET_SELECTED_ITEM),
  setActionDialogStatus: createAction<Types, { dialogKeyName: string; open: boolean }>(Types.SET_ACTION_DIALOG_STATUS),
};
