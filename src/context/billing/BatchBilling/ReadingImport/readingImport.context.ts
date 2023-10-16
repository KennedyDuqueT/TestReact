import { readingImportInitialValue } from '@/models/billing';
import { Action } from '@/utils';
import { Context, createContext } from 'react';
import { Types } from './readingImport.constants';
import { ContextType, State } from './readingImport.types';

export const initialState: State = {
  months: [],
  readingImportResultOfSearch: readingImportInitialValue,
  routes: [],
  serviceTypes: [],
  typesCustomer: [],
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Types.SET_MONTHS:
      return { ...state, months: [...action.payload] };
    case Types.SET_ROUTES:
      return { ...state, routes: [...action.payload] };
    case Types.SET_TYPES_CUSTOMER:
      return { ...state, typesCustomer: [...action.payload] };
    case Types.SET_SERVICE_TYPES:
      return { ...state, serviceTypes: [...action.payload] };
    case Types.SET_READING_IMPORT_RESULT_OF_SEARCH:
      return { ...state, readingImportResultOfSearch: { ...action.payload } };
    default:
      return state;
  }
};

export const ReadingImportContext: Context<ContextType> = createContext(initialState);
