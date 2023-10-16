import { DialogActions } from '@/models/commons';
import { Bank } from '@/models/portfolio';

export interface State {
  items: Bank[];
  selectedItem: Bank;
  openCreateDialog: boolean;
  openUpdateDialog: boolean;
  openDeleteDialog: boolean;
}

export interface Actions {
  getAll: () => void;
  deleteOne: (id: number) => Promise<boolean>;
  createOne: (bank: Bank) => Promise<boolean>;
  updateOne: (bankUpdated: Bank) => Promise<boolean>;
  selectOne: (id: number) => void;
  toggleDialogAction: (dialogAction: DialogActions) => void;
}

export interface ContextType extends State {
  actions?: Actions;
}
