import { useLoader } from '@/context/loader';
import { Actions, State } from './individualBilling.types';
import { reducerActions } from './individualBilling.constants';
import { IndividualBillingInterface, IndividualBillingFilterInterface } from '@/models/billing';
import {
  confirmIndividualBillingSimulatedAPI,
  generateIndividualBillingSimulatedAPI,
  getMonthsIndividualBilling,
  getServiceTypesIndividualBilling,
  processIndividualBillingSimulatedAPI,
  saveIndividualBillingSimulatedAPI,
} from '@/mocks/billing';

const useActions = (state: State, dispatch: any): Actions => {
  const { actions } = useLoader();
  const loadInitialInfo = async (): Promise<void> => {
    try {
      actions?.showLoader(true);
      dispatch(reducerActions.setMonths(await getMonthsIndividualBilling()));
      dispatch(reducerActions.setServiceTypes(await getServiceTypesIndividualBilling()));
    } catch (error) {
      // TODO: Implement error validation
    } finally {
      actions?.showLoader(false);
    }
  };

  const saveIndividualBilling = async (newIndividualBillingToSave: IndividualBillingInterface): Promise<boolean> => {
    try {
      actions?.showLoader(true);
      await saveIndividualBillingSimulatedAPI();
      console.log(newIndividualBillingToSave, 'Factura individual ha guardar');
      return true;
    } catch (error) {
      // TODO: Implement error validation
      return false;
    } finally {
      actions?.showLoader(false);
    }
  };

  const processIndividualBilling = async (individualBillingToProcess: IndividualBillingFilterInterface): Promise<IndividualBillingInterface[]> => {
    try {
      actions?.showLoader(true);
      console.log(individualBillingToProcess, 'Facturación individual ha procesar');
      return await processIndividualBillingSimulatedAPI();
    } catch (error) {
      // TODO: Implement error validation
      return [];
    } finally {
      actions?.showLoader(false);
    }
  };

  const generateIndividualBilling = async (IndividualBilling: IndividualBillingInterface[]): Promise<IndividualBillingInterface[]> => {
    try {
      actions?.showLoader(true);
      console.log(IndividualBilling, 'Facturación individual ha generar');
      return await generateIndividualBillingSimulatedAPI();
    } catch (error) {
      // TODO: Implement error validation
      return [];
    } finally {
      actions?.showLoader(false);
    }
  };

  const confirmIndividualBilling = async (newIndividualBillingToConfirm: IndividualBillingInterface[]): Promise<boolean> => {
    try {
      actions?.showLoader(true);
      await confirmIndividualBillingSimulatedAPI();
      console.log(newIndividualBillingToConfirm, 'Factura individual ha confirmar');
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
    saveIndividualBilling,
    processIndividualBilling,
    generateIndividualBilling,
    confirmIndividualBilling,
  };
};

export { useActions };
