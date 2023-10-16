import { useEffect } from 'react';
import { createPosVerifone, deletePosVerifone, getPosVerifoneList, updatePosVerifone } from '@/mocks/portfolio';
import { PosVerifone } from '@/models/portfolio';
import { DialogActions, DialogActionsStateKeys } from '@/models/commons';
import { Actions, State } from './posVerifoneConfig.types';
import { reducerActions } from './posVerifoneConfig.constants';
import { mapPosVerifoneItems } from './helpers';
import { usePosProviderConfig } from '../PosProviderConfig';

const useActions = (state: State, dispatch: any): Actions => {
  const { openDeleteDialog, openUpdateDialog } = state;
  const { items: posProviders } = usePosProviderConfig();

  useEffect(() => {
    if (!openDeleteDialog) {
      dispatch(reducerActions.setSelectedItem({} as PosVerifone));
    }
  }, [openDeleteDialog]);

  useEffect(() => {
    if (!openUpdateDialog) {
      dispatch(reducerActions.setSelectedItem({} as PosVerifone));
    }
  }, [openUpdateDialog]);

  const getAll = async () => {
    const items = await getPosVerifoneList();
    const mappedItems = mapPosVerifoneItems(items, posProviders);

    dispatch(reducerActions.setItems({ items, mappedItems }));
  };

  const deleteOne = async (id: number) => {
    try {
      const result = await deletePosVerifone(id);

      if (result) {
        await getAll();
        toggleDialogAction(DialogActions.DELETE);
      }

      return result;
    } catch (error) {
      return false;
    }
  };

  const createOne = async (posVerifone: PosVerifone) => {
    try {
      const result = await createPosVerifone(posVerifone);

      if (result) {
        await getAll();
        toggleDialogAction(DialogActions.CREATE);
      }

      return result;
    } catch (error) {
      return false;
    }
  };

  const updateOne = async (posVerifoneUpdated: PosVerifone) => {
    try {
      const result = await updatePosVerifone(posVerifoneUpdated);

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
