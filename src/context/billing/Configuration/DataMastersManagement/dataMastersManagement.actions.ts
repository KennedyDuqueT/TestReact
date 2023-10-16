import { reducerActions, API } from './dataMastersManagement.constants';
import { Actions, State } from './dataMastersManagement.types';
import { useLoader } from '@/context/loader';
import { useApi } from '@/hooks';

const useActions = (state: State, dispatch: any): Actions => {
  const { actions } = useLoader();
  const setBillingModes = useApi({ endpoint: API.GET_BILLING_MODES_ROUTE, method: 'get', withLoader: false });
  const getFrequencies = useApi({ endpoint: API.GET_FREQUENCIES_ROUTE, method: 'get', withLoader: false });
  const getServiceTypes = useApi({ endpoint: API.GET_SERVICE_TYPES_ROUTE, method: 'get', withLoader: false });
  const getZones = useApi({ endpoint: API.GET_ZONES_ROUTE, method: 'get', withLoader: false });
  const getSectors = useApi({ endpoint: API.GET_SECTORS_ROUTE, method: 'get', withLoader: false });

  const loadInitialInfo = async (): Promise<void> => {
    try {
      actions?.showLoader(true);
      dispatch(reducerActions.setBillingModes((await setBillingModes()).data));
      dispatch(reducerActions.setFrequencies((await getFrequencies()).data));
      dispatch(reducerActions.setSectors((await getSectors()).data));
      dispatch(reducerActions.setServiceTypes((await getServiceTypes()).data));
      dispatch(reducerActions.setZones((await getZones()).data));
    } catch (error) {
      console.error(error);
      // TODO: Implement error validation
    } finally {
      actions?.showLoader(false);
    }
  };

  return {
    loadInitialInfo,
  };
};

export { useActions };
