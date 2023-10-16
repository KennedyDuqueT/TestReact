import { TransitionStatesActions, State } from '../paperworks.types';
import { reducerActions } from '../paperworks.constants';
import { useLoader } from '@/context';
import { ENDPOINTS } from '@/api/endpoints';
import { useApi } from '@/hooks';

const useTransitionStatesActions = (state: State, dispatch: any): TransitionStatesActions => {
  const { actions } = useLoader();
  const getTransitionStateOrder = useApi({ endpoint: ENDPOINTS.getTransitionStatesOrder, method: 'get', withLoader: false });
  const updateTransitionStateOrders = useApi({ endpoint: ENDPOINTS.getTransitionStatesOrder, method: 'put', withLoader: false });

  const getTransitionsList = async () => {
    try {
      actions?.showLoader(true);
      const response = await getTransitionStateOrder({
        queryString: {
          procedureId: state.idPaperwork,
        },
      });

      if (response.succeeded) {
        const transitionList = response.data.map((item: any) => ({
          id: item.id,
          title: item.name,
          order: item.order,
        }));
        dispatch(reducerActions.setTransitionList(transitionList));
      }

      return {
        success: response.succeeded,
      };
    } catch (error) {
      dispatch(reducerActions.setTransitionList([]));
      return {
        success: false,
      };
    } finally {
      actions?.showLoader(false);
    }
  };

  const updateOrders = async (data: any) => {
    try {
      actions?.showLoader(true);
      const req = await updateTransitionStateOrders({
        body: {
          procedureId: state.idPaperwork,
          stages: data,
        },
      });

      return {
        success: req.succeeded,
      };
    } catch (error) {
      return {
        success: false,
      };
    } finally {
      actions?.showLoader(false);
    }
  };

  return {
    getTransitionsList,
    updateOrders,
  };
};

export { useTransitionStatesActions };
