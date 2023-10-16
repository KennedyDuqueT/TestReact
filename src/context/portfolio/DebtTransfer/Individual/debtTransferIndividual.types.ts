import { BasicSupply, SearchSupplyParams, SupplyPairForDebtTransfer } from '@/models/portfolio';

export interface State {
  isLoading: boolean;
  client: string;
  debtSupplies: BasicSupply[];
  destinationSupplies: BasicSupply[];
  selectedSupplies: {
    debt: number;
    destination: number;
  };
  supplyPairsList: SupplyPairForDebtTransfer[];
  selectedPairs: number[];
}

export interface Actions {
  searchAllSuppliesByClient: (search: SearchSupplyParams) => void;
  selectDebtSupplyToTransfer: (supplyId: number) => void;
  selectDestinationSupply: (supplyId: number) => void;
  handleProcessTransfer: () => void;
}

export interface ContextType extends State {
  actions?: Actions;
}
