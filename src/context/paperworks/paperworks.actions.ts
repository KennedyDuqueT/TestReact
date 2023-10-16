import { Actions, State } from './paperworks.types';
import { reducerActions } from './paperworks.constants';
import { useLoader } from '@/context';
import { useApi } from '@/hooks';

const useActions = (state: State, dispatch: any): Actions => {
  const { actions } = useLoader();
  const getPriorities = useApi({ endpoint: 'procedure/api/priorities', method: 'get', withLoader: false });
  const getProcedureTypes = useApi({ endpoint: 'procedure/api/procedurestypes', method: 'get', withLoader: false });
  const getUserSupplies = useApi({ endpoint: 'procedure/api/userssupplies', method: 'get', withLoader: false });

  const getCatalogs = async () => {
    try {
      actions?.showLoader(true);
      const priorities = await getPriorities();
      const procedureTypes = await getProcedureTypes();
      const userSupplies = await getUserSupplies();

      dispatch(reducerActions.setCatalogPriority(priorities.data));
      dispatch(reducerActions.setCatalogPaperworksType(procedureTypes.data));
      dispatch(reducerActions.setCatalogUserSupply(userSupplies.data));
    } catch (error) {
      dispatch(reducerActions.setCatalogPriority([]));
      dispatch(reducerActions.setCatalogPaperworksType([]));
      dispatch(reducerActions.setCatalogUserSupply([]));
    } finally {
      actions?.showLoader(false);
    }
  };

  const setIsPaperworkEditMode = (isEdit: boolean) => {
    dispatch(reducerActions.setEditMode(isEdit));
  };

  return {
    getCatalogs,
    setIsPaperworkEditMode,
  };
};

export { useActions };
