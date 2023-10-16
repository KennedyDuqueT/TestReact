import { API, reducerActions } from './ratesManagement.constants';
import { Actions, State } from './ratesManagement.types';
import { RateInterface } from '@/models/billing';
import { useLoader } from '@/context/loader';
import { useApi } from '@/hooks';

const useActions = (state: State, dispatch: any): Actions => {
  const { actions } = useLoader();
  const getRateTypes = useApi({ endpoint: API.GET_RATE_TYPES_ROUTE, method: 'get', withLoader: false });
  const saveRateApi = useApi({ endpoint: API.RATES_MANAGEMENT_ROUTE, method: 'post', withLoader: false });

  const loadInitialInfo = async (): Promise<void> => {
    try {
      actions?.showLoader(true);
      dispatch(reducerActions.setRateTypes((await getRateTypes()).data));
    } catch (error) {
      // TODO: Implement error validation
    } finally {
      actions?.showLoader(false);
    }
  };

  const saveRate = async (newRateToSave: RateInterface): Promise<boolean> => {
    try {
      actions?.showLoader(true);

      const result = await saveRateApi({
        body: newRateToSave,
      });
      return result.succeeded;
    } catch (error) {
      console.error(error);
      // TODO: Implement error validation
      return false;
    } finally {
      actions?.showLoader(false);
    }
  };

  return {
    loadInitialInfo,
    saveRate,
  };
};

export { useActions };
