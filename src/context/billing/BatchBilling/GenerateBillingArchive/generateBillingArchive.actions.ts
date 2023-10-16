import { generateBillingArchiveSimulatedAPI, saveSelectedGenerateBillingArchive } from '@/mocks/billing';
import { useLoader } from '@/context/loader';
import { Actions, State } from './generateBillingArchive.types';
import { reducerActions } from './generateBillingArchive.constants';

const useActions = (state: State, dispatch: any): Actions => {
  const { actions } = useLoader();
  const loadInitialInfo = async (): Promise<void> => {
    try {
      actions?.showLoader(true);
      dispatch(reducerActions.setTableGenerateBillingArchive(await generateBillingArchiveSimulatedAPI()));
    } catch (error) {
      // TODO: Implement error validation
    } finally {
      actions?.showLoader(false);
    }
  };

  const callSaveGenerateBillingArchive = async (generateBillingArchiveToIds: number[]): Promise<boolean> => {
    try {
      actions?.showLoader(true);
      return await saveSelectedGenerateBillingArchive(generateBillingArchiveToIds);
    } catch (error) {
      return false;
    } finally {
      actions?.showLoader(false);
    }
  };

  return {
    callSaveGenerateBillingArchive,
    loadInitialInfo,
  };
};

export { useActions };
