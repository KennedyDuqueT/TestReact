import { useLoader } from '@/context/loader';
import { Actions, State } from './electronicBillStamping.types';
import { API, reducerActions } from './electronicBillStamping.constants';
import { ElectronicBillStampingFormInterface, ElectronicBillStampingInterface } from '@/models/billing';
import { saveSelectedElectronicBillStamping, searchElectronicBillStampingSimulatedAPI } from '@/mocks/billing';
import { useApi } from '@/hooks';

const useActions = (state: State, dispatch: any): Actions => {
  const { actions } = useLoader();
  const getCycles = useApi({ endpoint: API.GET_CYCLES_ROUTE, method: 'get', withLoader: false });
  const getRoutes = useApi({ endpoint: API.GET_ROUTES_ROUTE, method: 'get', withLoader: false });
  const loadInitialInfo = async (): Promise<void> => {
    try {
      actions?.showLoader(true);
      dispatch(reducerActions.setCycles((await getCycles()).data));
      dispatch(reducerActions.setRoutes((await getRoutes()).data));
    } catch (error) {
      // TODO: Implement error validation
    } finally {
      actions?.showLoader(false);
    }
  };

  const filterElectronicBillStamping = async (
    electronicBillStampingToFilter: ElectronicBillStampingFormInterface
  ): Promise<ElectronicBillStampingInterface[]> => {
    try {
      actions?.showLoader(true);
      console.log(electronicBillStampingToFilter, 'Factura electronica ha filtrar');
      return await searchElectronicBillStampingSimulatedAPI();
    } catch (error) {
      // TODO: Implement error validation
      return [];
    } finally {
      actions?.showLoader(false);
    }
  };

  const callSaveElectronicBillStamping = async (electronicBillStampingToIds: number[]): Promise<boolean> => {
    try {
      actions?.showLoader(true);
      return await saveSelectedElectronicBillStamping(electronicBillStampingToIds);
    } catch (error) {
      return false;
    } finally {
      actions?.showLoader(false);
    }
  };

  return {
    loadInitialInfo,
    filterElectronicBillStamping,
    callSaveElectronicBillStamping,
  };
};

export { useActions };
