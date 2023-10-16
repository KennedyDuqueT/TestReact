import { CycleInterface, ElectronicBillStampingFormInterface, ElectronicBillStampingInterface, RouteInterface } from '@/models/billing';

export interface State {
  cycles: CycleInterface[];
  routes: RouteInterface[];
}

export interface Actions {
  callSaveElectronicBillStamping: (electronicBillStampingToIds: number[]) => Promise<boolean>;
  filterElectronicBillStamping: (electronicBillStampingToFilter: ElectronicBillStampingFormInterface) => Promise<ElectronicBillStampingInterface[]>;
  loadInitialInfo: () => Promise<void>;
}

export interface ContextType extends State {
  actions?: Actions;
}
