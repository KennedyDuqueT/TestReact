import { DialogActions } from '@/models/commons';
import { HomologatedTableDevice } from '@/models/portfolio';

export interface State {
  items: HomologatedTableDevice[];
  selectedItem: HomologatedTableDevice;
  openCreateDialog: boolean;
  openUpdateDialog: boolean;
  openDeleteDialog: boolean;
}

export interface Actions {
  getAll: () => void;
  deleteOne: (id: number) => Promise<boolean>;
  createOne: (supplyStatus: HomologatedTableDevice) => Promise<boolean>;
  updateOne: (supplyStatusUpdated: HomologatedTableDevice) => Promise<boolean>;
  selectOne: (id: number) => void;
  toggleDialogAction: (dialogAction: DialogActions) => void;
}

export interface ContextType extends State {
  actions?: Actions;
}
