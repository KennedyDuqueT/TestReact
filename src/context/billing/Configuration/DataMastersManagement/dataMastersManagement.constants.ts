import { SimpleCatalog } from '@/models/commons';
import { createAction } from '@/utils';

export enum Types {
  LOAD_INITIAL_INFO = 'dataMastersManagement/loadInitialInfo',
  SET_BILLING_MODES = 'dataMastersManagement/setBillingModes',
  SET_FREQUENCIES = 'dataMastersManagement/setFrequencies',
  SET_SECTORS = 'dataMastersManagement/setSectors',
  SET_ZONES = 'dataMastersManagement/setZones',
  SET_SERVICE_TYPES = 'dataMastersManagement/setServiceTypes',
}

export enum API {
  GET_BILLING_MODES_ROUTE = 'billing/api/billingType',
  GET_FREQUENCIES_ROUTE = 'billing/api/frequency',
  GET_SERVICE_TYPES_ROUTE = 'billing/api/serviceType',
  GET_SECTORS_ROUTE = 'billing/api/sector',
  GET_ZONES_ROUTE = 'billing/api/zone',
}

export const reducerActions = {
  setBillingModes: createAction<Types, SimpleCatalog[]>(Types.SET_BILLING_MODES),
  setFrequencies: createAction<Types, SimpleCatalog[]>(Types.SET_FREQUENCIES),
  setSectors: createAction<Types, SimpleCatalog[]>(Types.SET_SECTORS),
  setZones: createAction<Types, SimpleCatalog[]>(Types.SET_ZONES),
  setServiceTypes: createAction<Types, SimpleCatalog[]>(Types.SET_SERVICE_TYPES),
};
