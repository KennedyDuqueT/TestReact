import { DialogActions } from '@/models/commons';
import { InvoiceStatusType } from '@/models/portfolio';

export interface State {
  items: InvoiceStatusType[];
  selectedItem: InvoiceStatusType;
  openCreateDialog: boolean;
  openUpdateDialog: boolean;
  openDeleteDialog: boolean;
}

export interface Actions {
  getAll: () => void;
  deleteOne: (id: number) => Promise<boolean>;
  createOne: (invoiceStatusType: InvoiceStatusType) => Promise<boolean>;
  updateOne: (invoiceStatusTypeUpdated: InvoiceStatusType) => Promise<boolean>;
  selectOne: (id: number) => void;
  toggleDialogAction: (dialogAction: DialogActions) => void;
}

export interface ContextType extends State {
  actions?: Actions;
}
