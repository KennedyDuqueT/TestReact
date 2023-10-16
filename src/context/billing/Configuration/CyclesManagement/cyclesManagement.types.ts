import { CycleInterface } from '@/models/billing';

export interface Actions {
  saveCycle: (newCycleToSave: CycleInterface) => Promise<boolean>;
  searchCycle: (cycleToSearch: CycleInterface) => Promise<CycleInterface[]>;
}

export interface ContextType {
  actions?: Actions;
}
