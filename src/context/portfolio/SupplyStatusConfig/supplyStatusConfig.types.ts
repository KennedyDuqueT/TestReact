import { DialogActions } from '@/models/commons';
import { SupplyStatus } from '@/models/portfolio';

export interface State {
  items: SupplyStatus[];
  selectedItem: SupplyStatus;
  openCreateDialog: boolean;
  openUpdateDialog: boolean;
  openDeleteDialog: boolean;
}

export interface Actions {
  getAll: () => void;
  deleteOne: (id: number) => Promise<boolean>;
  createOne: (supplyStatus: SupplyStatus) => Promise<boolean>;
  updateOne: (supplyStatusUpdated: SupplyStatus) => Promise<boolean>;
  selectOne: (id: number) => void;
  toggleDialogAction: (dialogAction: DialogActions) => void;
}

export interface ContextType extends State {
  actions?: Actions;
}
