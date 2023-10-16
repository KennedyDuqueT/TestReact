import { DialogActions } from '@/models/commons';
import { PosVerifone, PosVerifoneMapped } from '@/models/portfolio';

export interface State {
  items: PosVerifone[];
  mappedItems: PosVerifoneMapped[];
  selectedItem: PosVerifone;
  openCreateDialog: boolean;
  openUpdateDialog: boolean;
  openDeleteDialog: boolean;
}

export interface Actions {
  getAll: () => void;
  deleteOne: (id: number) => Promise<boolean>;
  createOne: (posVerifone: PosVerifone) => Promise<boolean>;
  updateOne: (posVerifoneUpdated: PosVerifone) => Promise<boolean>;
  selectOne: (id: number) => void;
  toggleDialogAction: (dialogAction: DialogActions) => void;
}

export interface ContextType extends State {
  actions?: Actions;
}
