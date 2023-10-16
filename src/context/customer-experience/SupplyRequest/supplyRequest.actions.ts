import { Actions, State } from './supplyRequest.types';
import { reducerActions } from './supplyRequest.constants';
import { getServicesData, getCancelSupplyInfo } from '@/mocks/customer-experience';

const useActions = (state: State, dispatch: any): Actions => {
  const getAllSupplyRequest = async (): Promise<void> => {
    try {
      const data = await getServicesData();

      dispatch(reducerActions.setSupplyServices(data));
    } catch (error) {
      dispatch(reducerActions.setSupplyServices(state.services));
    }
  };

  const getCancelSupply = async (): Promise<void> => {
    try {
      const data = await getCancelSupplyInfo();
      dispatch(reducerActions.setCancelSupply(data));
    } catch (error) {
      dispatch(reducerActions.setCancelSupply(state.cancelSupply));
    }
  };

  return {
    getAllSupplyRequest,
    getCancelSupply,
  };
};

export { useActions };
