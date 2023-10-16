import { DialogActions } from '@/models/commons';
import { CurrencyExchangeRate } from '@/models/portfolio';

export interface State {
  items: CurrencyExchangeRate[];
  selectedItem: CurrencyExchangeRate;
  openCreateDialog: boolean;
  openUpdateDialog: boolean;
  openDeleteDialog: boolean;
}

export interface Actions {
  getAll: () => void;
  deleteOne: (id: number) => Promise<boolean>;
  createOne: (currencyExchangeRate: CurrencyExchangeRate) => Promise<boolean>;
  updateOne: (currencyExchangeRateUpdated: CurrencyExchangeRate) => Promise<boolean>;
  selectOne: (id: number) => void;
  toggleDialogAction: (dialogAction: DialogActions) => void;
}

export interface ContextType extends State {
  actions?: Actions;
}
