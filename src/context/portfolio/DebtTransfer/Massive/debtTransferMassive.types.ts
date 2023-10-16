import { BasicSupplyLot, SupplyPairForDebtTransfer } from '@/models/portfolio';

export interface State {
  isLoading: boolean;
  selectedSupplyLotId: number;
  supplyLots: BasicSupplyLot[];
  supplyPairsList: SupplyPairForDebtTransfer[];
  selectedPairs: number[];
}

export interface Actions {
  getAllSupplyLots: () => void;
  getAllSupplyPairs: () => void;
  selectSupplyLot: (id: number) => void;
  selectPairsToTransfer: (ids: number[]) => void;
  handleProcessTransfer: () => void;
}

export interface ContextType extends State {
  actions?: Actions;
}
