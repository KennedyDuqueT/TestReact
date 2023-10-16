import { createAction } from '@/utils';
import { LoadElecDevicesTableInterface, SubFarmCostTableInterface } from '@/models/customer-experience';

export enum Types {
  SET_ELEC_DEVICES = 'approvedTableRequest/setElecDevices',
  SET_SUB_FARM_COST = 'approvedTableRequest/setSubFarmCost',
  ADD_ELEC_DEVICE = 'approvedTableRequest/addElecDevice',
  REMOVE_ELEC_DEVICE = 'approvedTableRequest/removeElecDevice',
  EDIT_ELEC_DEVICE = 'approvedTableRequest/editElecDevice',
}

export const reducerActions = {
  setElecDevices: createAction<Types, LoadElecDevicesTableInterface[]>(Types.SET_ELEC_DEVICES),
  setSubFarmCost: createAction<Types, SubFarmCostTableInterface[]>(Types.SET_SUB_FARM_COST),
  addElecDevice: createAction<Types, LoadElecDevicesTableInterface>(Types.ADD_ELEC_DEVICE),
  removeElecDevice: createAction<string>(Types.REMOVE_ELEC_DEVICE),
  editElecDevice: createAction<Types, LoadElecDevicesTableInterface>(Types.ADD_ELEC_DEVICE),
};
