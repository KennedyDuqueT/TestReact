import { CriticalReadingSearchInterface, CriticalReadingInterface } from '@/models/billing';
import { SimpleCatalog } from '@/models/commons';

export interface State {
  typesCustomer: SimpleCatalog[];
  routes: SimpleCatalog[];
  months: SimpleCatalog[];
  status: SimpleCatalog[];
  serviceTypes: SimpleCatalog[];
  criticalReadingResultOfSearch: CriticalReadingInterface;
}

export interface Actions {
  saveCriticalReading: (newCriticalReadingToSave: CriticalReadingInterface) => Promise<boolean>;
  searchCriticalReading: (criticalReadingToSearch: CriticalReadingSearchInterface) => Promise<boolean>;
  callSaveCriticalReading: (criticalReadingToIds: number[]) => Promise<boolean>;
  loadInitialInfo: () => Promise<void>;
}

export interface ContextType extends State {
  actions?: Actions;
}
