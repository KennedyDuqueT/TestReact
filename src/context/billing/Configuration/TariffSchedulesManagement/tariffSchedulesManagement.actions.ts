import {
  getCalculationTypes,
  getCodesConcept,
  getCurrencies,
  getRates,
  getRealValues,
  getReferenceValues,
  getServiceTypesTariffSchedules,
  getStatus,
  getTypesRate,
  saveTariffSchedulesSimulatedAPI,
  searchTariffSchedulesSimulatedAPI,
} from '@/mocks/billing';
import { reducerActions } from './tariffSchedulesManagement.constants';
import { Actions, State } from './tariffSchedulesManagement.types';
import { TariffSchedulesInterface } from '@/models/billing';
import { useLoader } from '@/context/loader';

const useActions = (state: State, dispatch: any): Actions => {
  const { actions } = useLoader();
  const loadInitialInfo = async (): Promise<void> => {
    try {
      actions?.showLoader(true);
      dispatch(reducerActions.setServiceTypes(await getServiceTypesTariffSchedules()));
      dispatch(reducerActions.setCodesConcept(await getCodesConcept()));
      dispatch(reducerActions.setCalculationTypes(await getCalculationTypes()));
      dispatch(reducerActions.setCurrencies(await getCurrencies()));
      dispatch(reducerActions.setRates(await getRates()));
      dispatch(reducerActions.setRealValues(await getRealValues()));
      dispatch(reducerActions.setReferenceValues(await getReferenceValues()));
      dispatch(reducerActions.setStatus(await getStatus()));
      dispatch(reducerActions.setTypesRate(await getTypesRate()));
    } catch (error) {
      // TODO: Implement error validation
    } finally {
      actions?.showLoader(false);
    }
  };

  const saveTariffSchedules = async (newTariffSchedulesToSave: TariffSchedulesInterface): Promise<boolean> => {
    try {
      await saveTariffSchedulesSimulatedAPI();
      console.log(newTariffSchedulesToSave, 'Cuadro tarifario ha generar');
      return true;
    } catch (error) {
      // TODO: Implement error validation
      return false;
    } finally {
      actions?.showLoader(false);
    }
  };

  const searchTariffSchedules = async (TariffSchedulesToSearch: TariffSchedulesInterface): Promise<boolean> => {
    try {
      actions?.showLoader(true);
      dispatch(reducerActions.setTariffSchedulesResultOfSearch(await searchTariffSchedulesSimulatedAPI()));
      console.log(TariffSchedulesToSearch, 'Cuadro tarifario ha buscar');
      return true;
    } catch (error) {
      // TODO: Implement error validation
      return false;
    } finally {
      actions?.showLoader(false);
    }
  };

  return {
    loadInitialInfo,
    saveTariffSchedules,
    searchTariffSchedules,
  };
};

export { useActions };
