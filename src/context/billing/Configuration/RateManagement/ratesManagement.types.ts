import { RateInterface } from '@/models/billing';
import { SimpleCatalog } from '@/models/commons';

export interface State {
  rateTypes: SimpleCatalog[];
}

export interface Actions {
  saveRate: (newRateToSave: RateInterface) => Promise<boolean>;
  loadInitialInfo: () => Promise<void>;
}

export interface ContextType extends State {
  actions?: Actions;
}
