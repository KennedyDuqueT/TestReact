import { SupplyLot, SupplyLotActions, SupplyLotDetailItem } from '@/models/portfolio';

export interface State {
  isLoading: boolean;
  supplyLots: SupplyLot[];
  selectedSupplyLotId: number;
  selectedLot?: SupplyLot;
  supplies: SupplyLotDetailItem[];
  selectedSupply?: SupplyLotDetailItem;
  openActionDialog: boolean;
  selectedAction?: SupplyLotActions;
  isPenalizedLot: boolean;
}

export interface Actions {
  getAllSupplyLots: () => void;
  selectSupplyLot: (id: number) => void;
  getSuppliesInLot: () => void;
  toggleActionDialog: (supplyAction: SupplyLotActions, supplyId: number) => void;
  handleConfirmSupplyAction: () => void;
}

export interface ContextType extends State {
  actions?: Actions;
}
