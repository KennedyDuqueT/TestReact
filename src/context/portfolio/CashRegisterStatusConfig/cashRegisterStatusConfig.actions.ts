import { useEffect } from 'react';
import { createCashRegisterStatus, deleteCashRegisterStatus, getCashRegisterStatusList, updateCashRegisterStatus } from '@/mocks/portfolio';
import { CashRegisterStatus } from '@/models/portfolio';
import { DialogActions, DialogActionsStateKeys } from '@/models/commons';
import { Actions, State } from './cashRegisterStatusConfig.types';
import { reducerActions } from './cashRegisterStatusConfig.constants';

const useActions = (state: State, dispatch: any): Actions => {
  const { openDeleteDialog, openUpdateDialog } = state;

  useEffect(() => {
    if (!openDeleteDialog) {
      dispatch(reducerActions.setSelectedItem({} as CashRegisterStatus));
    }
  }, [openDeleteDialog]);

  useEffect(() => {
    if (!openUpdateDialog) {
      dispatch(reducerActions.setSelectedItem({} as CashRegisterStatus));
    }
  }, [openUpdateDialog]);

  const getAll = async () => {
    const items = await getCashRegisterStatusList();

    dispatch(reducerActions.setItems(items));
  };

  const deleteOne = async (id: number) => {
    try {
      const result = await deleteCashRegisterStatus(id);

      if (result) {
        await getAll();
        toggleDialogAction(DialogActions.DELETE);
      }

      return result;
    } catch (error) {
      return false;
    }
  };

  const createOne = async (cashRegisterStatus: CashRegisterStatus) => {
    try {
      const result = await createCashRegisterStatus(cashRegisterStatus);

      if (result) {
        await getAll();
        toggleDialogAction(DialogActions.CREATE);
      }

      return result;
    } catch (error) {
      return false;
    }
  };

  const updateOne = async (cashRegisterStatusUpdated: CashRegisterStatus) => {
    try {
      const result = await updateCashRegisterStatus(cashRegisterStatusUpdated);

      if (result) {
        await getAll();
        toggleDialogAction(DialogActions.UPDATE);
      }

      return result;
    } catch (error) {
      return false;
    }
  };

  const selectOne = (id: number) => {
    const selectedItem = state.items.find((item) => item.id === id);

    dispatch(reducerActions.setSelectedItem(selectedItem));
  };

  const toggleDialogAction = (dialogAction: DialogActions) => {
    const dialogKeyName: DialogActionsStateKeys = `open${dialogAction}Dialog`;

    dispatch(reducerActions.setActionDialogStatus({ dialogKeyName, open: !state[dialogKeyName] }));
  };

  return {
    getAll,
    deleteOne,
    createOne,
    updateOne,
    selectOne,
    toggleDialogAction,
  };
};

export { useActions };
