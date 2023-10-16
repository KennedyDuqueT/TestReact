import { createAction } from '@/utils';
import { BasicSupplyLot, SupplyPairForDebtTransfer } from '@/models/portfolio';

export enum Types {
  SET_LOADING = 'debtTransferMassive/setLoading',
  SET_SUPPLY_LOTS = 'debtTransferMassive/setSupplyLots',
  SET_SUPPLY_PAIRS_LIST = 'debtTransferMassive/setSupplyPairsList',
  SET_SELECTED_SUPPLY_LOT = 'debtTransferMassive/setSelectedSupplyLot',
  SET_SELECTED_PAIRS_TO_TRANSFER = 'debtTransferMassive/setSelectedPairsToTransfer',
}

export const reducerActions = {
  setLoading: createAction<Types, boolean>(Types.SET_LOADING),
  setSupplyLots: createAction<Types, BasicSupplyLot[]>(Types.SET_SUPPLY_LOTS),
  setSelectedSupplyLot: createAction<Types, number>(Types.SET_SELECTED_SUPPLY_LOT),
  setSupplyPairsList: createAction<Types, SupplyPairForDebtTransfer[]>(Types.SET_SUPPLY_PAIRS_LIST),
  setSelectedPairsToTransfer: createAction<Types, number[]>(Types.SET_SELECTED_PAIRS_TO_TRANSFER),
};
