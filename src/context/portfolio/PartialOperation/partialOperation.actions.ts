import { getCompanyList, getOrderTypeList, getReasonList, getSupplyInvoices, searchSupplyBySupplyNumber } from '@/mocks/portfolio';
import { PartialOperationFormValues, SupplyForOperation } from '@/models/portfolio';
import { Actions, State } from './partialOperation.types';
import { reducerActions } from './partialOperation.constants';

const useActions = (state: State, dispatch: any): Actions => {
  const getAllNeededCatalogs = async (): Promise<void> => {
    try {
      dispatch(reducerActions.setLoading(true));

      const companies = await getCompanyList();
      const orderTypes = await getOrderTypeList();
      const reasons = await getReasonList();

      dispatch(reducerActions.setCompanies(companies));
      dispatch(reducerActions.setOrderTypes(orderTypes));
      dispatch(reducerActions.setReasons(reasons));
    } catch (error) {
      // TODO: Implement error validation
    } finally {
      dispatch(reducerActions.setLoading(false));
    }
  };

  const getInvoicesBySupply = async (): Promise<void> => {
    try {
      dispatch(reducerActions.setLoading(true));

      const invoices = await getSupplyInvoices(state.selectedSupply.id!);

      dispatch(reducerActions.setInvoiceList(invoices));
    } catch (error) {
      dispatch(reducerActions.setInvoiceList([]));
    } finally {
      dispatch(reducerActions.setLoading(false));
    }
  };

  const searchSupply = async (supplyNumber: string): Promise<boolean> => {
    try {
      dispatch(reducerActions.setLoading(true));

      const result: SupplyForOperation | boolean = await searchSupplyBySupplyNumber(supplyNumber);

      if (!result) return false;

      dispatch(reducerActions.setSelectedSupply(result));

      await getAllNeededCatalogs();
      await getInvoicesBySupply();

      return true;
    } catch (error) {
      dispatch(reducerActions.setSelectedSupply({} as SupplyForOperation));

      return false;
    } finally {
      dispatch(reducerActions.setLoading(false));
    }
  };

  const createPartialOperation = async (operation: PartialOperationFormValues): Promise<void> => {
    console.log('[TODO]: implement operation', operation);

    // TODO: Connect with API to save changes
  };

  const selectInvoices = (invoiceIds: number[]) => {
    dispatch(reducerActions.setSelectedInvoices(invoiceIds));
  };

  return {
    getInvoicesBySupply,
    searchSupply,
    getAllNeededCatalogs,
    createPartialOperation,
    selectInvoices,
  };
};

export { useActions };
