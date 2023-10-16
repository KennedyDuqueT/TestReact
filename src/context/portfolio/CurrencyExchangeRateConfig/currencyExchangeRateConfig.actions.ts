import { useEffect } from 'react';
import { createCurrencyExchangeRate, deleteCurrencyExchangeRate, getCurrencyExchangeRateList, updateCurrencyExchangeRate } from '@/mocks/portfolio';
import { CurrencyExchangeRate } from '@/models/portfolio';
import { DialogActions, DialogActionsStateKeys } from '@/models/commons';
import { Actions, State } from './currencyExchangeRateConfig.types';
import { reducerActions } from './currencyExchangeRateConfig.constants';

const useActions = (state: State, dispatch: any): Actions => {
  const { openDeleteDialog, openUpdateDialog } = state;

  useEffect(() => {
    if (!openDeleteDialog) {
      dispatch(reducerActions.setSelectedItem({} as CurrencyExchangeRate));
    }
  }, [openDeleteDialog]);

  useEffect(() => {
    if (!openUpdateDialog) {
      dispatch(reducerActions.setSelectedItem({} as CurrencyExchangeRate));
    }
  }, [openUpdateDialog]);

  const getAll = async () => {
    const items = await getCurrencyExchangeRateList();

    dispatch(reducerActions.setItems(items));
  };

  const deleteOne = async (id: number) => {
    try {
      const result = await deleteCurrencyExchangeRate(id);

      if (result) {
        await getAll();
        toggleDialogAction(DialogActions.DELETE);
      }

      return result;
    } catch (error) {
      return false;
    }
  };

  const createOne = async (currencyExchangeRate: CurrencyExchangeRate) => {
    try {
      const result = await createCurrencyExchangeRate(currencyExchangeRate);

      if (result) {
        await getAll();
        toggleDialogAction(DialogActions.CREATE);
      }

      return result;
    } catch (error) {
      return false;
    }
  };

  const updateOne = async (currencyExchangeRateUpdated: CurrencyExchangeRate) => {
    try {
      const result = await updateCurrencyExchangeRate(currencyExchangeRateUpdated);

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
