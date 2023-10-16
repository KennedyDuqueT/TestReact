import { useLoader } from '@/context';
import { getProcessedSupplyData } from '@/mocks/portfolio';
import { Actions, State } from './legalReturn.types';
import { reducerActions } from './legalReturn.constants';
import { LegalReturnFormValues } from '@/models/portfolio';

const useActions = (state: State, dispatch: any): Actions => {
  const { actions } = useLoader();

  const uploadLegalReturnFile = async (values: LegalReturnFormValues): Promise<void> => {
    try {
      actions?.showLoader(true);

      // TODO: Send file to backend API & wait results

      const data = await getProcessedSupplyData(values);

      dispatch(reducerActions.setProcessedSupplies(data));
    } catch (error) {
      dispatch(reducerActions.setProcessedSupplies([]));
    } finally {
      actions?.showLoader(false);
    }
  };

  return {
    uploadLegalReturnFile,
  };
};

export { useActions };
