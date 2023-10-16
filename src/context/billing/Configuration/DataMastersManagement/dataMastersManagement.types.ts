import { SimpleCatalog } from '@/models/commons';

export interface State {
  frequencies: SimpleCatalog[];
  serviceTypes: SimpleCatalog[];
  billingModes: SimpleCatalog[];
  sectors: SimpleCatalog[];
  zones: SimpleCatalog[];
}

export interface Actions {
  loadInitialInfo: () => Promise<void>;
}

export interface ContextType extends State {
  actions?: Actions;
}
