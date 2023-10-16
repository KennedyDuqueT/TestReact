import { TariffSchedulesInterface } from '@/models/billing';
import { SimpleCatalog } from '@/models/commons';
import { createAction } from '@/utils';

export enum Types {
  SAVE_TARIFF_SCHEDULES = 'tariffSchedulesManagement/saveTariffSchedules',
  LOAD_INITIAL_INFO = 'tariffSchedulesManagement/loadInitialInfo',
  SEARCH_TARIFF_SCHEDULES = 'tariffSchedulesManagement/searchTariffResult',
  SET_CURRENCIES = 'tariffSchedulesManagement/setCurrencies',
  SET_CALCULATION_TYPES = 'tariffSchedulesManagement/setCalculationTypes',
  SET_RATES = 'tariffSchedulesManagement/setRates',
  SET_CODES_CONCEPT = 'tariffSchedulesManagement/setCodesConcept',
  SET_REAL_VALUES = 'tariffSchedulesManagement/setRealValues',
  SET_REFERENCE_VALUES = 'tariffSchedulesManagement/setReferenceValues',
  SET_TYPES_RATE = 'tariffSchedulesManagement/setTypesRate',
  SET_STATUS = 'tariffSchedulesManagement/setStatus',
  SET_SERVICE_TYPES = 'tariffSchedulesManagement/setServiceTypes',
  SET_TARIFF_SCHEDULES_RESULT_OF_SEARCH = 'tariffSchedulesManagement/setTariffSchedulesResultOfSearch',
}

export const reducerActions = {
  setCurrencies: createAction<Types, SimpleCatalog[]>(Types.SET_CURRENCIES),
  setCalculationTypes: createAction<Types, SimpleCatalog[]>(Types.SET_CALCULATION_TYPES),
  setRates: createAction<Types, SimpleCatalog[]>(Types.SET_RATES),
  setCodesConcept: createAction<Types, SimpleCatalog[]>(Types.SET_CODES_CONCEPT),
  setRealValues: createAction<Types, SimpleCatalog[]>(Types.SET_REAL_VALUES),
  setReferenceValues: createAction<Types, SimpleCatalog[]>(Types.SET_REFERENCE_VALUES),
  setTypesRate: createAction<Types, SimpleCatalog[]>(Types.SET_TYPES_RATE),
  setStatus: createAction<Types, SimpleCatalog[]>(Types.SET_STATUS),
  setServiceTypes: createAction<Types, SimpleCatalog[]>(Types.SET_SERVICE_TYPES),
  setTariffSchedulesResultOfSearch: createAction<Types, TariffSchedulesInterface>(Types.SET_TARIFF_SCHEDULES_RESULT_OF_SEARCH),
};
