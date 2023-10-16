import { DialogActions } from '@/models/commons';
import { LotStatus } from '@/models/portfolio';

export interface State {
  items: LotStatus[];
  selectedItem: LotStatus;
  openCreateDialog: boolean;
  openUpdateDialog: boolean;
  openDeleteDialog: boolean;
}

export interface Actions {
  getAll: () => void;
  deleteOne: (id: number) => Promise<boolean>;
  createOne: (lotStatus: LotStatus) => Promise<boolean>;
  updateOne: (lotStatusUpdated: LotStatus) => Promise<boolean>;
  selectOne: (id: number) => void;
  toggleDialogAction: (dialogAction: DialogActions) => void;
}

export interface ContextType extends State {
  actions?: Actions;
}
