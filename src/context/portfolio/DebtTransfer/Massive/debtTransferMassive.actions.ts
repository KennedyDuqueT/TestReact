import { Actions, State } from './debtTransferMassive.types';
import { reducerActions } from './debtTransferMassive.constants';
import { getSupplyLotsSimpleListData, getSupplyPairsData } from '@/mocks/portfolio';

const useActions = (state: State, dispatch: any): Actions => {
  const getAllSupplyLots = async (): Promise<void> => {
    try {
      dispatch(reducerActions.setLoading(true));

      const data = await getSupplyLotsSimpleListData();

      dispatch(reducerActions.setSupplyLots(data));
    } catch (error) {
      dispatch(reducerActions.setSupplyLots([]));
    } finally {
      dispatch(reducerActions.setLoading(false));
    }
  };

  const getAllSupplyPairs = async (): Promise<void> => {
    try {
      dispatch(reducerActions.setLoading(true));

      const data = await getSupplyPairsData(state.selectedSupplyLotId);

      dispatch(reducerActions.setSupplyPairsList(data));
    } catch (error) {
      dispatch(reducerActions.setSupplyPairsList([]));
    } finally {
      dispatch(reducerActions.setLoading(false));
    }
  };

  const selectSupplyLot = async (id: number): Promise<void> => {
    dispatch(reducerActions.setSelectedSupplyLot(id));
  };

  const selectPairsToTransfer = async (ids: number[]): Promise<void> => {
    dispatch(reducerActions.setSelectedPairsToTransfer(ids));
  };

  const handleProcessTransfer = async (): Promise<void> => {
    // TODO: Connect with api
  };

  return {
    getAllSupplyLots,
    selectSupplyLot,
    getAllSupplyPairs,
    selectPairsToTransfer,
    handleProcessTransfer,
  };
};

export { useActions };
