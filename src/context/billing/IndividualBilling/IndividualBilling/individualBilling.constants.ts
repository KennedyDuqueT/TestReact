import { SimpleCatalog } from '@/models/commons';
import { createAction } from '@/utils';

export enum Types {
  LOAD_INITIAL_INFO = 'individualBilling/loadInitialInfo',
  PROCESS_INDIVIDUAL_BILLING = 'individualBilling/processIndividualBilling',
  GENERATE_INDIVIDUAL_BILLING = 'individualBilling/generateIndividualBilling',
  SET_SERVICE_TYPES = 'individualBilling/setServiceTypes',
  SET_MONTHS = 'individualBilling/setMonths',
}

export const reducerActions = {
  setServiceTypes: createAction<Types, SimpleCatalog[]>(Types.SET_SERVICE_TYPES),
  setMonths: createAction<Types, SimpleCatalog[]>(Types.SET_MONTHS),
};
