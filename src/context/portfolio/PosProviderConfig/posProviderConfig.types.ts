import { DialogActions } from '@/models/commons';
import { PosProvider } from '@/models/portfolio';

export interface State {
  items: PosProvider[];
  selectedItem: PosProvider;
  openCreateDialog: boolean;
  openUpdateDialog: boolean;
  openDeleteDialog: boolean;
}

export interface Actions {
  getAll: () => void;
  deleteOne: (id: number) => Promise<boolean>;
  createOne: (posProvider: PosProvider) => Promise<boolean>;
  updateOne: (posProviderUpdated: PosProvider) => Promise<boolean>;
  selectOne: (id: number) => void;
  toggleDialogAction: (dialogAction: DialogActions) => void;
}

export interface ContextType extends State {
  actions?: Actions;
}
