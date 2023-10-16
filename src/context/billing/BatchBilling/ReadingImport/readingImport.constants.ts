import { ReadingImportInterface } from '@/models/billing';
import { SimpleCatalog } from '@/models/commons';
import { createAction } from '@/utils';

export enum Types {
  LOAD_INITIAL_INFO = 'readingImport/loadInitialInfo',
  FILTER_READING_IMPORT = 'readingImport/filterReadingImport',
  SET_TYPES_CUSTOMER = 'readingImport/setTypesCustomer',
  SET_ROUTES = 'readingImport/setRoutes',
  SET_MONTHS = 'readingImport/setMonths',
  SET_SERVICE_TYPES = 'readingImport/setServiceTypes',
  SET_READING_IMPORT_RESULT_OF_SEARCH = 'readingImport/setReadingImportResultOfSearch',
}

export const reducerActions = {
  setTypesCustomer: createAction<Types, SimpleCatalog[]>(Types.SET_TYPES_CUSTOMER),
  setRoutes: createAction<Types, SimpleCatalog[]>(Types.SET_ROUTES),
  setMonths: createAction<Types, SimpleCatalog[]>(Types.SET_MONTHS),
  setServiceTypes: createAction<Types, SimpleCatalog[]>(Types.SET_SERVICE_TYPES),
  setReadingImportResultOfSearch: createAction<Types, ReadingImportInterface>(Types.SET_READING_IMPORT_RESULT_OF_SEARCH),
};
