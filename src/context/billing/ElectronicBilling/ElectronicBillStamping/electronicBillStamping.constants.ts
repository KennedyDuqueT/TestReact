import { CycleInterface, RouteInterface } from '@/models/billing';
import { createAction } from '@/utils';

export enum Types {
  LOAD_INITIAL_INFO = 'electronicBillStamping/loadInitialInfo',
  SET_CYCLES = 'electronicBillStamping/setCycles',
  SET_ROUTES = 'electronicBillStamping/setRoutes',
  FILTER_ELECTRONIC_BILL_STAMPING = 'electronicBillStamping/filterElectronicBillStamping',
  CALL_SAVE_ELECTRONIC_BILL_STAMPING_API = 'electronicBillStamping/callSaveElectronicBillStamping',
}

export enum API {
  GET_CYCLES_ROUTE = 'billing/api/Cycle',
  GET_ROUTES_ROUTE = 'billing/api/Routes',
}

export const reducerActions = {
  callSaveElectronicBillStamping: createAction<Types, number[]>(Types.CALL_SAVE_ELECTRONIC_BILL_STAMPING_API),
  setCycles: createAction<Types, CycleInterface[]>(Types.SET_CYCLES),
  setRoutes: createAction<Types, RouteInterface[]>(Types.SET_ROUTES),
};
