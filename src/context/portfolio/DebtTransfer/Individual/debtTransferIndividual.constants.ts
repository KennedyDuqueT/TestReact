import { createAction } from '@/utils';
import { SupplyPairForDebtTransfer, BasicSupply } from '@/models/portfolio';

export enum Types {
  SET_LOADING = 'debtTransferIndividual/setLoading',
  SET_CLIENT = 'debtTransferIndividual/setClient',
  SET_DEBT_SUPPLIES = 'debtTransferIndividual/setDebtSupplies',
  SET_DESTINATION_SUPPLIES = 'debtTransferIndividual/setDestinationSupplies',
  SET_SELECTED_DEBT_SUPPLY = 'debtTransferIndividual/setSelectedDebtSupply',
  SET_SELECTED_DESTINATION_SUPPLY = 'debtTransferIndividual/setSelectedDestinationSupply',
  SET_SUPPLY_PAIRS_LIST = 'debtTransferIndividual/setSupplyPairsList',
}

export const reducerActions = {
  setLoading: createAction<Types, boolean>(Types.SET_LOADING),
  setClient: createAction<Types, string>(Types.SET_CLIENT),
  setDebtSupplies: createAction<Types, BasicSupply[]>(Types.SET_DEBT_SUPPLIES),
  setDestinationSupplies: createAction<Types, BasicSupply[]>(Types.SET_DESTINATION_SUPPLIES),
  setSelectedDebtSupply: createAction<Types, number>(Types.SET_SELECTED_DEBT_SUPPLY),
  setSelectedDestinationSupply: createAction<Types, number>(Types.SET_SELECTED_DESTINATION_SUPPLY),
  setSupplyPairsList: createAction<Types, SupplyPairForDebtTransfer[]>(Types.SET_SUPPLY_PAIRS_LIST),
};
