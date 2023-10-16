import { useEffect } from 'react';
import { createLotStatus, deleteLotStatus, getLotStatusList, updateLotStatus } from '@/mocks/portfolio';
import { LotStatus } from '@/models/portfolio';
import { DialogActions, DialogActionsStateKeys } from '@/models/commons';
import { Actions, State } from './lotStatusConfig.types';
import { reducerActions } from './lotStatusConfig.constants';

const useActions = (state: State, dispatch: any): Actions => {
  const { openDeleteDialog, openUpdateDialog } = state;

  useEffect(() => {
    if (!openDeleteDialog) {
      dispatch(reducerActions.setSelectedItem({} as LotStatus));
    }
  }, [openDeleteDialog]);

  useEffect(() => {
    if (!openUpdateDialog) {
      dispatch(reducerActions.setSelectedItem({} as LotStatus));
    }
  }, [openUpdateDialog]);

  const getAll = async () => {
    const items = await getLotStatusList();

    dispatch(reducerActions.setItems(items));
  };

  const deleteOne = async (id: number) => {
    try {
      const result = await deleteLotStatus(id);

      if (result) {
        await getAll();
        toggleDialogAction(DialogActions.DELETE);
      }

      return result;
    } catch (error) {
      return false;
    }
  };

  const createOne = async (lotStatus: LotStatus) => {
    try {
      const result = await createLotStatus(lotStatus);

      if (result) {
        await getAll();
        toggleDialogAction(DialogActions.CREATE);
      }

      return result;
    } catch (error) {
      return false;
    }
  };

  const updateOne = async (lotStatusUpdated: LotStatus) => {
    try {
      const result = await updateLotStatus(lotStatusUpdated);

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
