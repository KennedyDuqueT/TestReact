import { createAction } from '@/utils';
import { SupplyLot, SupplyLotActions, SupplyLotDetailItem } from '@/models/portfolio';

export enum Types {
  SET_LOADING = 'supplylot/setLoading',
  SET_SUPPLY_LOTS = 'supplylot/setSupplyLots',
  SET_SELECTED_SUPPLY_LOT = 'supplylot/setSelectedSupplyLot',
  SET_SUPPLY_LIST = 'supplylot/setSupplyList',
  SET_SELECTED_SUPPLY = 'supplylot/setSelectedSupply',
  SET_TOGGLE_ACTION_DIALOG = 'supplylot/setActionDialogStatus',
}

export const reducerActions = {
  setLoading: createAction<Types, boolean>(Types.SET_LOADING),
  setSupplyLots: createAction<Types, SupplyLot[]>(Types.SET_SUPPLY_LOTS),
  setSelectedSupplyLot: createAction<Types, number>(Types.SET_SELECTED_SUPPLY_LOT),
  setSupplyList: createAction<Types, SupplyLotDetailItem[]>(Types.SET_SUPPLY_LIST),
  setSelectedSupply: createAction<Types, SupplyLotDetailItem>(Types.SET_SELECTED_SUPPLY),
  toggleActionDialog: createAction<Types, SupplyLotActions>(Types.SET_TOGGLE_ACTION_DIALOG),
};
