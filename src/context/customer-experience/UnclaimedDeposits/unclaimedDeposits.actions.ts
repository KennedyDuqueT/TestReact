import { Actions, State } from './unclaimedDeposits.types';
import { reducerActions } from './unclaimedDeposits.constants';
import { getSearchResultsTableData } from '@/mocks/customer-experience';

const useActions = (state: State, dispatch: any): Actions => {
  const getAllUnclaimedDeposits = async (): Promise<void> => {
    try {
      console.log('start: ');
      const data = await getSearchResultsTableData();

      dispatch(reducerActions.setSearchResults(data));
    } catch (error) {
      console.log('error: ', error);
      dispatch(reducerActions.setSearchResults(state.searchResults));
    }
  };

  return {
    getAllUnclaimedDeposits,
  };
};

export { useActions };
