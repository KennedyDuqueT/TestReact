import {
  getMonthsProvisionalBilling,
  getTypesCustomerProvisionalBilling,
  saveSelectedProvisionalBilling,
  searchProvisionalBillingSimulatedAPI,
} from '@/mocks/billing';
import { useLoader } from '@/context/loader';
import { Actions, State } from './provisionalBilling.types';
import { reducerActions } from './provisionalBilling.constants';
import { ProvisionalBillingSearchInterface } from '@/models/billing';

const useActions = (state: State, dispatch: any): Actions => {
  const { actions } = useLoader();
  const loadInitialInfo = async (): Promise<void> => {
    try {
      actions?.showLoader(true);
      dispatch(reducerActions.setMonths(await getMonthsProvisionalBilling()));
      dispatch(reducerActions.setTypesCustomer(await getTypesCustomerProvisionalBilling()));
    } catch (error) {
      // TODO: Implement error validation
    } finally {
      actions?.showLoader(false);
    }
  };

  const searchProvisionalBilling = async (provisionalBillingToSearch: ProvisionalBillingSearchInterface): Promise<boolean> => {
    try {
      actions?.showLoader(true);
      dispatch(reducerActions.setProvisionalBillingResultOfSearch(await searchProvisionalBillingSimulatedAPI()));
      console.log(provisionalBillingToSearch, 'Faturas provisorias ha buscar');
      return true;
    } catch (error) {
      // TODO: Implement error validation
      return false;
    } finally {
      actions?.showLoader(false);
    }
  };

  const callSaveProvisionalBilling = async (provisionalBillingToIds: number[]): Promise<boolean> => {
    try {
      actions?.showLoader(true);
      return await saveSelectedProvisionalBilling(provisionalBillingToIds);
    } catch (error) {
      return false;
    } finally {
      actions?.showLoader(false);
    }
  };

  return {
    callSaveProvisionalBilling,
    loadInitialInfo,
    searchProvisionalBilling,
  };
};

export { useActions };
