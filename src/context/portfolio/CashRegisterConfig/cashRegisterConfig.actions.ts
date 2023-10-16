import { useEffect } from 'react';
import {
  createCashRegister,
  deleteCashRegister,
  getAccountList,
  getBankList,
  getCashRegisterClosingTypeList,
  getCashRegisterList,
  getCashRegisterTypeList,
  getCurrencyList,
  getStatusList,
  updateCashRegister,
} from '@/mocks/portfolio';
import { CashRegister } from '@/models/portfolio';
import { DialogActions, DialogActionsStateKeys } from '@/models/commons';
import { Actions, State } from './cashRegisterConfig.types';
import { reducerActions } from './cashRegisterConfig.constants';

const useActions = (state: State, dispatch: any): Actions => {
  const { openDeleteDialog, openUpdateDialog } = state;

  useEffect(() => {
    if (!openDeleteDialog) {
      dispatch(reducerActions.setSelectedItem({} as CashRegister));
    }
  }, [openDeleteDialog]);

  useEffect(() => {
    if (!openUpdateDialog) {
      dispatch(reducerActions.setSelectedItem({} as CashRegister));
    }
  }, [openUpdateDialog]);

  const getAll = async () => {
    const items = await getCashRegisterList();

    dispatch(reducerActions.setItems(items));
  };

  const deleteOne = async (id: number) => {
    try {
      const result = await deleteCashRegister(id);

      if (result) {
        await getAll();
        toggleDialogAction(DialogActions.DELETE);
      }

      return result;
    } catch (error) {
      return false;
    }
  };

  const createOne = async (cashRegister: CashRegister) => {
    try {
      const result = await createCashRegister(cashRegister);

      if (result) {
        await getAll();
        toggleDialogAction(DialogActions.CREATE);
      }

      return result;
    } catch (error) {
      return false;
    }
  };

  const updateOne = async (cashRegisterUpdated: CashRegister) => {
    try {
      const result = await updateCashRegister(cashRegisterUpdated);

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

  const getAllCatalogData = async () => {
    try {
      const currencies = await getCurrencyList();
      dispatch(reducerActions.setCurrencyList(currencies));

      const types = await getCashRegisterTypeList();
      dispatch(reducerActions.setTypeList(types));

      const closingTypes = await getCashRegisterClosingTypeList();
      dispatch(reducerActions.setClosingTypeList(closingTypes));

      const accounts = await getAccountList();
      dispatch(reducerActions.setAccountList(accounts));

      const banks = await getBankList();
      dispatch(reducerActions.setBankList(banks));

      const status = await getStatusList();
      dispatch(reducerActions.setStatusList(status));
    } catch (error) {
      console.log('An error occurred when trying to obtain catalog data');
    }
  };

  return {
    getAll,
    deleteOne,
    createOne,
    updateOne,
    selectOne,
    toggleDialogAction,
    getAllCatalogData,
  };
};

export { useActions };
