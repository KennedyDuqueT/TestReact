import { createAction } from '@/utils';
import { SupplyServiceType, CancelSupplyType } from '@/models/customer-experience';

export enum Types {
  SET_SUPPLY_SERVICES = 'supplyRequest/setSupplyServices',
  SET_CANCEL_SUPPLY = 'supplyRequest/setCancelSupply',
}

export const reducerActions = {
  setSupplyServices: createAction<Types, SupplyServiceType[]>(Types.SET_SUPPLY_SERVICES),
  setCancelSupply: createAction<Types, CancelSupplyType>(Types.SET_CANCEL_SUPPLY),
};
