import { API, reducerActions } from './routesManagement.constants';
import { Actions, State } from './routesManagement.types';
import { RouteInterface } from '@/models/billing';
import { useLoader } from '@/context/loader';
import { useApi } from '@/hooks';

const useActions = (state: State, dispatch: any): Actions => {
  const { actions } = useLoader();
  const getCycles = useApi({ endpoint: API.GET_CYCLES_ROUTE, method: 'get', withLoader: false });
  const saveRouteApi = useApi({ endpoint: API.ROUTES_MANAGEMENT_ROUTE, method: 'post', withLoader: false });
  const updateRouteApi = useApi({ endpoint: API.ROUTES_MANAGEMENT_ROUTE, method: 'put', withLoader: false });
  const searchRouteApi = useApi({ endpoint: API.ROUTES_MANAGEMENT_ROUTE, method: 'get', withLoader: false });

  const loadInitialInfo = async (): Promise<void> => {
    try {
      actions?.showLoader(true);
      dispatch(reducerActions.setCycles((await getCycles()).data));
    } catch (error) {
      // TODO: Implement error validation
    } finally {
      actions?.showLoader(false);
    }
  };

  const saveRoute = async (newRouteToSave: RouteInterface): Promise<boolean> => {
    try {
      actions?.showLoader(true);
      if (newRouteToSave.id === 0) {
        newRouteToSave.id = null;
        await saveRouteApi({
          body: {
            name: newRouteToSave.name,
            cycleId: newRouteToSave.cycleId,
            description: newRouteToSave.description,
            createdByUserId: newRouteToSave.createdByUserId,
          },
        });
      } else {
        await updateRouteApi({
          body: {
            id: newRouteToSave.id,
            name: newRouteToSave.name,
            cycleId: newRouteToSave.cycleId,
            description: newRouteToSave.description,
            updatedByUserId: newRouteToSave.createdByUserId,
          },
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

  const searchRoute = async (routeToSearch: RouteInterface): Promise<RouteInterface[]> => {
    try {
      actions?.showLoader(true);
      return (
        await searchRouteApi({
          urlParams: `?fields=name,cycleId&search=${routeToSearch.name},${routeToSearch.cycleId}`,
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
    loadInitialInfo,
    saveRoute,
    searchRoute,
  };
};

export { useActions };
