import { Actions, State } from './changeOfOwnershipUploadDocuments.types';
import { reducerActions } from './changeOfOwnershipUploadDocuments.constants';
import { useLoader } from '@/context';
import { ownershipCatalog } from '@/mocks/customer-experience';

const useActions = (state: State, dispatch: any): Actions => {
  const { actions } = useLoader();

  const getCatalogs = async (): Promise<void> => {
    try {
      actions?.showLoader(true);
      const response = ownershipCatalog;

      if (response.succeeded) {
        dispatch(reducerActions.setCatalogCustomerType(response.data));
      }
    } catch (error) {
      dispatch(reducerActions.setCatalogCustomerType([]));
    } finally {
      actions?.showLoader(false);
    }
  };

  return {
    getCatalogs,
  };
};

export { useActions };
