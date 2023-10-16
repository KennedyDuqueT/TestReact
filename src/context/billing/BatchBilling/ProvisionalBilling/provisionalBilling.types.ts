import { ProvisionalBillingInterface, ProvisionalBillingSearchInterface } from '@/models/billing';
import { SimpleCatalog } from '@/models/commons';

export interface State {
  typesCustomer: SimpleCatalog[];
  months: SimpleCatalog[];
  provisionalBillingResultOfSearch: ProvisionalBillingInterface;
}

export interface Actions {
  callSaveProvisionalBilling: (provisionalBillingToIds: number[]) => Promise<boolean>;
  searchProvisionalBilling: (provisionalBillingToSearch: ProvisionalBillingSearchInterface) => Promise<boolean>;
  loadInitialInfo: () => Promise<void>;
}

export interface ContextType extends State {
  actions?: Actions;
}
