import { SearchSupplyParams, SupplyPairForDebtTransfer } from '@/models/portfolio';
import { SearchResponse, searchClientSupplies } from '@/mocks/portfolio';
import { Actions, State } from './debtTransferIndividual.types';
import { reducerActions } from './debtTransferIndividual.constants';

const useActions = (state: State, dispatch: any): Actions => {
  const searchAllSuppliesByClient = async (search: SearchSupplyParams): Promise<void> => {
    try {
      dispatch(reducerActions.setLoading(true));

      const data: SearchResponse = await searchClientSupplies(search);
      const { client, debtSupplies, destinationSupplies } = data;

      dispatch(reducerActions.setClient(`${client.clientNumber} - ${client.fullName}`));
      dispatch(reducerActions.setDebtSupplies(debtSupplies));
      dispatch(reducerActions.setDestinationSupplies(destinationSupplies));
    } catch (error) {
      // TODO: Validate errors
    } finally {
      dispatch(reducerActions.setLoading(false));
    }
  };

  const selectDebtSupplyToTransfer = async (supplyId: number): Promise<void> => {
    dispatch(reducerActions.setSelectedDebtSupply(supplyId));

    const exists = state.supplyPairsList[0];
    const supply = state.debtSupplies.find((supplyItem) => supplyItem.id === supplyId);

    if (!supply) return;

    const supplyPair: SupplyPairForDebtTransfer = {
      pairId: 1,
      debtSupplyNumber: supply!.supplyNumber,
      destinationSupplyNumber: '',
      amountLate: supply!.amountLate,
      status: '',
    };

    if (exists) {
      dispatch(
        reducerActions.setSupplyPairsList([
          { ...state.supplyPairsList[0], debtSupplyNumber: supplyPair.debtSupplyNumber, amountLate: supplyPair.amountLate },
        ])
      );
    } else {
      dispatch(reducerActions.setSupplyPairsList([supplyPair]));
    }
  };

  const selectDestinationSupply = async (supplyId: number): Promise<void> => {
    dispatch(reducerActions.setSelectedDestinationSupply(supplyId));

    const exists = state.supplyPairsList[0];
    const supply = state.destinationSupplies.find((supplyItem) => supplyItem.id === supplyId);

    if (!supply) return;

    const supplyPair: SupplyPairForDebtTransfer = {
      pairId: 1,
      debtSupplyNumber: '',
      destinationSupplyNumber: supply!.supplyNumber,
      amountLate: 0,
      status: supply!.status,
    };

    if (exists) {
      dispatch(
        reducerActions.setSupplyPairsList([
          { ...state.supplyPairsList[0], destinationSupplyNumber: supplyPair.destinationSupplyNumber, status: supplyPair.status },
        ])
      );
    } else {
      dispatch(reducerActions.setSupplyPairsList([supplyPair]));
    }
  };

  const handleProcessTransfer = async (): Promise<void> => {
    // TODO: Connect with api
  };

  return {
    searchAllSuppliesByClient,
    selectDebtSupplyToTransfer,
    selectDestinationSupply,
    handleProcessTransfer,
  };
};

export { useActions };
