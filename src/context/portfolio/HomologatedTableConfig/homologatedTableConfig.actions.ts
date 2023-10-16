import { useEffect } from 'react';
import {
  createHomologatedTableDevice,
  deleteHomologatedTableDevice,
  getHomologatedTableDeviceList,
  updateHomologatedTableDevice,
} from '@/mocks/portfolio';
import { HomologatedTableDevice } from '@/models/portfolio';
import { DialogActions, DialogActionsStateKeys } from '@/models/commons';
import { Actions, State } from './homologatedTableConfig.types';
import { reducerActions } from './homologatedTableConfig.constants';

const useActions = (state: State, dispatch: any): Actions => {
  const { openDeleteDialog, openUpdateDialog } = state;

  useEffect(() => {
    if (!openDeleteDialog) {
      dispatch(reducerActions.setSelectedItem({} as HomologatedTableDevice));
    }
  }, [openDeleteDialog]);

  useEffect(() => {
    if (!openUpdateDialog) {
      dispatch(reducerActions.setSelectedItem({} as HomologatedTableDevice));
    }
  }, [openUpdateDialog]);

  const getAll = async () => {
    const items = await getHomologatedTableDeviceList();

    dispatch(reducerActions.setItems(items));
  };

  const deleteOne = async (id: number) => {
    try {
      const result = await deleteHomologatedTableDevice(id);

      if (result) {
        await getAll();
        toggleDialogAction(DialogActions.DELETE);
      }

      return result;
    } catch (error) {
      return false;
    }
  };

  const createOne = async (homologatedTableDevice: HomologatedTableDevice) => {
    try {
      const result = await createHomologatedTableDevice(homologatedTableDevice);

      if (result) {
        await getAll();
        toggleDialogAction(DialogActions.CREATE);
      }

      return result;
    } catch (error) {
      return false;
    }
  };

  const updateOne = async (homologatedTableDeviceUpdated: HomologatedTableDevice) => {
    try {
      const result = await updateHomologatedTableDevice(homologatedTableDeviceUpdated);

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
