import { DialogActions } from '@/models/commons';
import { PaymentDealType } from '@/models/portfolio';

export interface State {
  items: PaymentDealType[];
  selectedItem: PaymentDealType;
  openCreateDialog: boolean;
  openUpdateDialog: boolean;
  openDeleteDialog: boolean;
}

export interface Actions {
  getAll: () => void;
  deleteOne: (id: number) => Promise<boolean>;
  createOne: (supplyStatus: PaymentDealType) => Promise<boolean>;
  updateOne: (supplyStatusUpdated: PaymentDealType) => Promise<boolean>;
  selectOne: (id: number) => void;
  toggleDialogAction: (dialogAction: DialogActions) => void;
}

export interface ContextType extends State {
  actions?: Actions;
}
