import { SimpleCatalog } from '@/models/commons';
import { createAction } from '@/utils';

export enum Types {
  SAVE_RATE = 'ratesManagement/saveRate',
  SET_RATE_TYPES = 'ratesManagement/setRateTypes',
  LOAD_INITIAL_INFO = 'ratesManagement/loadInitialInfo',
}

export enum API {
  GET_SERVICE_TYPES_ROUTE = 'billing/api/serviceType',
  GET_RATE_TYPES_ROUTE = 'billing/api/rateType',
  RATES_MANAGEMENT_ROUTE = 'billing/api/Rate',
}

export const reducerActions = {
  setRateTypes: createAction<Types, SimpleCatalog[]>(Types.SET_RATE_TYPES),
};
