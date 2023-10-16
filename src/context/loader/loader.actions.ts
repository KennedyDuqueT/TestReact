import { Actions, State } from './loader.types';
import { reducerActions } from './loader.constants';

const useActions = (state: State, dispatch: any): Actions => {
  const showLoader = (isLoading: boolean) => {
    dispatch(reducerActions.setLoading(isLoading));
  };

  return {
    showLoader,
  };
};

export { useActions };
