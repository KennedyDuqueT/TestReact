import { DialogActions, Catalog } from '@/models/commons';
import { CashRegister, CashRegisterMapped } from '@/models/portfolio';

export interface CashRegisterCatalogs {
  currencies: Catalog[];
  types: Catalog[];
  closingTypes: Catalog[];
  accounts: Catalog[];
  banks: Catalog[];
  status: Catalog[];
}

export interface State {
  items: CashRegister[];
  mappedItems: CashRegisterMapped[];
  selectedItem: CashRegister;
  openCreateDialog: boolean;
  openUpdateDialog: boolean;
  openDeleteDialog: boolean;
  catalogs: CashRegisterCatalogs;
}

export interface Actions {
  getAll: () => void;
  deleteOne: (id: number) => Promise<boolean>;
  createOne: (cashRegister: CashRegister) => Promise<boolean>;
  updateOne: (cashRegisterUpdated: CashRegister) => Promise<boolean>;
  selectOne: (id: number) => void;
  toggleDialogAction: (dialogAction: DialogActions) => void;
  getAllCatalogData: () => void;
}

export interface ContextType extends State {
  actions?: Actions;
}
