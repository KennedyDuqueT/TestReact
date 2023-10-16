import { CycleInterface } from '@/models/billing';
import { createAction } from '@/utils';

export enum Types {
  SAVE_ROUTE = 'routesManagement/saveRoute',
  LOAD_INITIAL_INFO = 'routesManagement/loadInitialInfo',
  SEARCH_ROUTE = 'routesManagement/searchRoute',
  SET_CYCLES = 'routesManagement/setCycles',
}

export enum API {
  GET_CYCLES_ROUTE = 'billing/api/Cycle',
  ROUTES_MANAGEMENT_ROUTE = 'billing/api/Routes',
}

export const reducerActions = {
  setCycles: createAction<Types, CycleInterface[]>(Types.SET_CYCLES),
};
