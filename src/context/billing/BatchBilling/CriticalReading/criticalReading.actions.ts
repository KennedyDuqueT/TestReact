import {
  getMonthsCriticalReading,
  getRoutesCriticalReading,
  getServiceTypesCriticalReading,
  getTypesCustomerCriticalReading,
  getStatusCriticalReading,
  saveCriticalReadingSimulatedAPI,
  searchCriticalReadingSimulatedAPI,
  saveSelectedCriticalReading,
} from '@/mocks/billing';
import { CriticalReadingSearchInterface, CriticalReadingInterface } from '@/models/billing';
import { useLoader } from '@/context/loader';
import { Actions, State } from './criticalReading.types';
import { reducerActions } from './criticalReading.constants';

const useActions = (state: State, dispatch: any): Actions => {
  const { actions } = useLoader();
  const loadInitialInfo = async (): Promise<void> => {
    try {
      actions?.showLoader(true);
      dispatch(reducerActions.setMonths(await getMonthsCriticalReading()));
      dispatch(reducerActions.setRoutes(await getRoutesCriticalReading()));
      dispatch(reducerActions.setServiceTypes(await getServiceTypesCriticalReading()));
      dispatch(reducerActions.setTypesCustomer(await getTypesCustomerCriticalReading()));
      dispatch(reducerActions.setStatus(await getStatusCriticalReading()));
    } catch (error) {
      // TODO: Implement error validation
    } finally {
      actions?.showLoader(false);
    }
  };

  const searchCriticalReading = async (criticalReadingToSearch: CriticalReadingSearchInterface): Promise<boolean> => {
    try {
      actions?.showLoader(true);
      dispatch(reducerActions.setCriticalReadingResultOfSearch(await searchCriticalReadingSimulatedAPI()));
      console.log(criticalReadingToSearch, 'Critica de lectura ha buscar');
      return true;
    } catch (error) {
      // TODO: Implement error validation
      return false;
    } finally {
      actions?.showLoader(false);
    }
  };

  const saveCriticalReading = async (newCriticalReadingToSave: CriticalReadingInterface): Promise<boolean> => {
    try {
      actions?.showLoader(true);
      await saveCriticalReadingSimulatedAPI();
      console.log(newCriticalReadingToSave, 'Critica de lectura ha guardar');
      return true;
    } catch (error) {
      // TODO: Implement error validation
      return false;
    } finally {
      actions?.showLoader(false);
    }
  };

  const callSaveCriticalReading = async (criticalReadingToIds: number[]): Promise<boolean> => {
    try {
      actions?.showLoader(true);
      return await saveSelectedCriticalReading(criticalReadingToIds);
    } catch (error) {
      return false;
    } finally {
      actions?.showLoader(false);
    }
  };

  return {
    loadInitialInfo,
    searchCriticalReading,
    saveCriticalReading,
    callSaveCriticalReading,
  };
};

export { useActions };
