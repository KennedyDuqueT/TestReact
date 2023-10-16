import { GenerateBillingArchiveInterface } from '@/models/billing';

export interface State {
  tableGenerateBillingArchive: GenerateBillingArchiveInterface;
}

export interface Actions {
  callSaveGenerateBillingArchive: (generateBillingArchiveToIds: number[]) => Promise<boolean>;
  loadInitialInfo: () => Promise<void>;
}

export interface ContextType extends State {
  actions?: Actions;
}
