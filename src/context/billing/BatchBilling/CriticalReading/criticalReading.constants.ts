import { CriticalReadingInterface } from '@/models/billing';
import { SimpleCatalog } from '@/models/commons';
import { createAction } from '@/utils';

export enum Types {
  LOAD_INITIAL_INFO = 'criticalReading/loadInitialInfo',
  SEARCH_CRITICAL_READING = 'criticalReading/searchCriticalReading',
  SET_TYPES_CUSTOMER = 'criticalReading/setTypesCustomer',
  SET_ROUTES = 'criticalReading/setRoutes',
  SET_MONTHS = 'criticalReading/setMonths',
  SET_STATUS = 'criticalReading/setStatus',
  SET_SERVICE_TYPES = 'criticalReading/setServiceTypes',
  CALL_SAVE_GENERATE_BILLING_ARCHIVE_API = 'criticalReading/callSaveCriticalReading',
  SET_CRITICAL_READING_RESULT_OF_SEARCH = 'criticalReading/setCriticalReadingResultOfSearch',
}

export const reducerActions = {
  setTypesCustomer: createAction<Types, SimpleCatalog[]>(Types.SET_TYPES_CUSTOMER),
  setRoutes: createAction<Types, SimpleCatalog[]>(Types.SET_ROUTES),
  setMonths: createAction<Types, SimpleCatalog[]>(Types.SET_MONTHS),
  setStatus: createAction<Types, SimpleCatalog[]>(Types.SET_STATUS),
  setServiceTypes: createAction<Types, SimpleCatalog[]>(Types.SET_SERVICE_TYPES),
  callSaveCriticalReading: createAction<Types, number[]>(Types.CALL_SAVE_GENERATE_BILLING_ARCHIVE_API),
  setCriticalReadingResultOfSearch: createAction<Types, CriticalReadingInterface>(Types.SET_CRITICAL_READING_RESULT_OF_SEARCH),
};
