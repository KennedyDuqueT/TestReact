import { CatalogModel } from '@/models/customer-experience';

export interface State {
  catalogCustomerType: CatalogModel[];
}

export interface Actions {
  getCatalogs: () => Promise<void>;
}

export interface ContextType extends State {
  actions?: Actions;
}
