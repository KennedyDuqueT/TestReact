import { Actions, State } from './supplyLot.types';
import { reducerActions } from './supplyLot.constants';
import { getSupplyLotsData, getSupplyLotDetail } from '@/mocks/portfolio';
import { SupplyLotActions } from '@/models/portfolio';

const useActions = (state: State, dispatch: any): Actions => {
  const getAllSupplyLots = async (): Promise<void> => {
    try {
      dispatch(reducerActions.setLoading(true));

      const data = await getSupplyLotsData();

      dispatch(reducerActions.setSupplyLots(data));
    } catch (error) {
      dispatch(reducerActions.setSupplyLots([]));
    } finally {
      dispatch(reducerActions.setLoading(false));
    }
  };

  const selectSupplyLot = async (id: number): Promise<void> => {
    dispatch(reducerActions.setSelectedSupplyLot(id));
  };

  const getSuppliesInLot = async (): Promise<void> => {
    try {
      dispatch(reducerActions.setLoading(true));

      const data = await getSupplyLotDetail(state.selectedSupplyLotId);

      dispatch(reducerActions.setSupplyList(data));
    } catch (error) {
      dispatch(reducerActions.setSupplyList([]));
    } finally {
      dispatch(reducerActions.setLoading(false));
    }
  };

  const toggleActionDialog = (supplyAction: SupplyLotActions, supplyId: number) => {
    dispatch(reducerActions.toggleActionDialog(supplyAction));

    const selectedSupply = supplyId > 0 ? state.supplies.find((supplyItem) => supplyItem.id === supplyId) : undefined;
    dispatch(reducerActions.setSelectedSupply(selectedSupply));
  };

  const handleConfirmSupplyAction = async () => {
    console.log('TODO: Implement confirm action');
  };

  return {
    getAllSupplyLots,
    selectSupplyLot,
    getSuppliesInLot,
    toggleActionDialog,
    handleConfirmSupplyAction,
  };
};

export { useActions };
