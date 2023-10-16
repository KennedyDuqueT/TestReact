import { ProvisionalBillingInterface } from '@/models/billing';
import { SimpleCatalog } from '@/models/commons';
import { createAction } from '@/utils';

export enum Types {
  LOAD_INITIAL_INFO = 'provisionalBilling/loadInitialInfo',
  SEARCH_PROVISIONAL_BILLING = 'provisionalBilling/searchProvisionalBilling',
  SET_TYPES_CUSTOMER = 'provisionalBilling/setTypesCustomer',
  SET_MONTHS = 'provisionalBilling/setMonths',
  CALL_SAVE_PROVISIONAL_BILLING_API = 'provisionalBilling/callSaveProvisionalBilling',
  SET_PROVISIONAL_BILLING_RESULT_OF_SEARCH = 'provisionalBilling/setProvisionalBillingResultOfSearch',
}

export const reducerActions = {
  setTypesCustomer: createAction<Types, SimpleCatalog[]>(Types.SET_TYPES_CUSTOMER),
  setMonths: createAction<Types, SimpleCatalog[]>(Types.SET_MONTHS),
  callSaveProvisionalBilling: createAction<Types, number[]>(Types.CALL_SAVE_PROVISIONAL_BILLING_API),
  setProvisionalBillingResultOfSearch: createAction<Types, ProvisionalBillingInterface>(Types.SET_PROVISIONAL_BILLING_RESULT_OF_SEARCH),
};
