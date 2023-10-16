import { TariffSchedulesInterface } from '@/models/billing';
import { SimpleCatalog } from '@/models/commons';

export interface State {
  serviceTypes: SimpleCatalog[];
  tariffSchedulesResultOfSearch: TariffSchedulesInterface;
  currencies: SimpleCatalog[];
  calculationTypes: SimpleCatalog[];
  rates: SimpleCatalog[];
  codesConcept: SimpleCatalog[];
  realValues: SimpleCatalog[];
  referenceValues: SimpleCatalog[];
  typesRate: SimpleCatalog[];
  status: SimpleCatalog[];
}

export interface Actions {
  saveTariffSchedules: (newTariffSchedulesToSave: TariffSchedulesInterface) => Promise<boolean>;
  searchTariffSchedules: (tariffSchedulesToSearch: TariffSchedulesInterface) => Promise<boolean>;
  loadInitialInfo: () => Promise<void>;
}

export interface ContextType extends State {
  actions?: Actions;
}
