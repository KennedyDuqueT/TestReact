import { IndividualBillingInterface, IndividualBillingFilterInterface } from '@/models/billing';
import { SimpleCatalog } from '@/models/commons';

export interface State {
  serviceTypes: SimpleCatalog[];
  months: SimpleCatalog[];
}

export interface Actions {
  saveIndividualBilling: (newIndividualBillingToSave: IndividualBillingInterface) => Promise<boolean>;
  processIndividualBilling: (individualBillingToProcess: IndividualBillingFilterInterface) => Promise<IndividualBillingInterface[]>;
  generateIndividualBilling: (individualBillingToGenerate: IndividualBillingInterface[]) => Promise<IndividualBillingInterface[]>;
  confirmIndividualBilling: (individualBillingToConfirm: IndividualBillingInterface[]) => Promise<boolean>;
  loadInitialInfo: () => Promise<void>;
}

export interface ContextType extends State {
  actions?: Actions;
}
