import { createAction } from '@/utils';
import { SearchResultsTableType } from '@/models/customer-experience';

export enum Types {
  SET_SEARCH_RESULTS = 'unclaimedDeposits/setSearchResults',
}

export const reducerActions = {
  setSearchResults: createAction<Types, SearchResultsTableType[]>(Types.SET_SEARCH_RESULTS),
};
