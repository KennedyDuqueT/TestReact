import { DialogActions } from '@/models/commons';
import { CashRegisterStatus } from '@/models/portfolio';

export interface State {
  items: CashRegisterStatus[];
  selectedItem: CashRegisterStatus;
  openCreateDialog: boolean;
  openUpdateDialog: boolean;
  openDeleteDialog: boolean;
}

export interface Actions {
  getAll: () => void;
  deleteOne: (id: number) => Promise<boolean>;
  createOne: (cashRegisterStatus: CashRegisterStatus) => Promise<boolean>;
  updateOne: (cashRegisterStatusUpdated: CashRegisterStatus) => Promise<boolean>;
  selectOne: (id: number) => void;
  toggleDialogAction: (dialogAction: DialogActions) => void;
}

export interface ContextType extends State {
  actions?: Actions;
}
