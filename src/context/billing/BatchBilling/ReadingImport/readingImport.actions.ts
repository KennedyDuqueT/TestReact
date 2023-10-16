import {
  getMonths,
  getRoutes,
  getServiceTypesReadingImport,
  getTypesCustomer,
  saveReadingImportAutomaticSimulatedAPI,
  saveReadingImportManualSimulatedAPI,
  searchReadingImportSimulatedAPI,
} from '@/mocks/billing';

import { ReadingImportFilterInterface, ReadingImportInterface } from '@/models/billing';
import { useLoader } from '@/context/loader';
import { Actions, State } from './readingImport.types';
import { reducerActions } from './readingImport.constants';

const useActions = (state: State, dispatch: any): Actions => {
  const { actions } = useLoader();
  const loadInitialInfo = async (): Promise<void> => {
    try {
      actions?.showLoader(true);
      dispatch(reducerActions.setMonths(await getMonths()));
      dispatch(reducerActions.setRoutes(await getRoutes()));
      dispatch(reducerActions.setServiceTypes(await getServiceTypesReadingImport()));
      dispatch(reducerActions.setTypesCustomer(await getTypesCustomer()));
    } catch (error) {
      // TODO: Implement error validation
    } finally {
      actions?.showLoader(false);
    }
  };

  const searchReadingImport = async (readingImportToSearch: ReadingImportFilterInterface): Promise<boolean> => {
    try {
      actions?.showLoader(true);
      dispatch(reducerActions.setReadingImportResultOfSearch(await searchReadingImportSimulatedAPI()));
      console.log(readingImportToSearch, 'Importación de lectura ha buscar');
      return true;
    } catch (error) {
      // TODO: Implement error validation
      return false;
    } finally {
      actions?.showLoader(false);
    }
  };

  const saveReadingImportAutomatic = async (newReadingImportAutomaticToSave: ReadingImportInterface): Promise<boolean> => {
    try {
      actions?.showLoader(true);
      await saveReadingImportAutomaticSimulatedAPI();
      console.log(newReadingImportAutomaticToSave, 'Lectura automatica ha guardar');
      return true;
    } catch (error) {
      // TODO: Implement error validation
      return false;
    } finally {
      actions?.showLoader(false);
    }
  };

  const saveReadingImportManual = async (newReadingImportManualToSave: ReadingImportInterface): Promise<boolean> => {
    try {
      actions?.showLoader(true);
      await saveReadingImportManualSimulatedAPI();
      console.log(newReadingImportManualToSave, 'Lectura manual ha guardar');
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
    searchReadingImport,
    saveReadingImportAutomatic,
    saveReadingImportManual,
  };
};

export { useActions };
