import { API } from './cyclesManagement.constants';
import { Actions } from './cyclesManagement.types';
import { CycleInterface } from '@/models/billing';
import { useLoader } from '@/context/loader';
import { useApi } from '@/hooks';

const useActions = (): Actions => {
  const { actions } = useLoader();
  const saveCycleApi = useApi({ endpoint: API.CYCLES_MANAGEMENT_ROUTE, method: 'post', withLoader: false });
  const updateCycleApi = useApi({ endpoint: API.CYCLES_MANAGEMENT_ROUTE, method: 'put', withLoader: false });
  const searchCycleApi = useApi({ endpoint: API.CYCLES_MANAGEMENT_ROUTE, method: 'get', withLoader: false });

  const saveCycle = async (newCycleToSave: CycleInterface): Promise<boolean> => {
    try {
      actions?.showLoader(true);
      if (newCycleToSave.id === 0) {
        newCycleToSave.id = null;
        await saveCycleApi({
          body: newCycleToSave,
        });
      } else {
        await updateCycleApi({
          body: newCycleToSave,
        });
      }
      return true;
    } catch (error) {
      console.error(error);
      // TODO: Implement error validation
      return false;
    } finally {
      actions?.showLoader(false);
    }
  };

  const searchCycle = async (cycleToSearch: CycleInterface): Promise<CycleInterface[]> => {
    try {
      actions?.showLoader(true);
      return (
        await searchCycleApi({
          urlParams: `?fields=name,serviceTypeId&search=${cycleToSearch.name},${cycleToSearch.serviceTypeId}`,
        })
      ).data;
    } catch (error) {
      console.error(error);
      // TODO: Implement error validation
      return [];
    } finally {
      actions?.showLoader(false);
    }
  };

  return {
    saveCycle,
    searchCycle,
  };
};

export { useActions };
