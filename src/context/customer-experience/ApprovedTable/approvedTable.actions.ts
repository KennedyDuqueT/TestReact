import { Actions, State } from './approvedTable.types';
import { reducerActions } from './approvedTable.constants';
import { getElecDevicesData, getSubFarmCostsData } from '@/mocks/customer-experience';
import { LoadElecDevicesTableInterface } from '@/models/customer-experience';

const useActions = (state: State, dispatch: any): Actions => {
  const getAllElecDevicesRequest = async (): Promise<void> => {
    try {
      const data = await getElecDevicesData();
      dispatch(reducerActions.setElecDevices(data));
    } catch (error) {
      dispatch(reducerActions.setElecDevices(state.elecDevices));
    }
  };

  const getAllSubFarmCostRequest = async (): Promise<void> => {
    try {
      const data = await getSubFarmCostsData();
      dispatch(reducerActions.setSubFarmCost(data));
    } catch (error) {
      dispatch(reducerActions.setSubFarmCost(state.subFarmCosts));
    }
  };

  const addElecDeviceRequest = async (data: LoadElecDevicesTableInterface): Promise<void> => {
    try {
      dispatch(reducerActions.addElecDevice(data));
    } catch (error) {
      console.log('Error addElecDeviceRequest: ', error);
    }
  };

  const removeElecDeviceRequest = async (data: number): Promise<void> => {
    try {
      dispatch(reducerActions.removeElecDevice(data));
    } catch (error) {
      console.log('Error removeElecDeviceRequest: ', error);
    }
  };

  const editElecDeviceRequest = async (data: LoadElecDevicesTableInterface): Promise<void> => {
    try {
      dispatch(reducerActions.editElecDevice(data));
    } catch (error) {
      console.log('Error editElecDeviceRequest: ', error);
    }
  };

  return {
    getAllElecDevicesRequest,
    getAllSubFarmCostRequest,
    addElecDeviceRequest,
    removeElecDeviceRequest,
    editElecDeviceRequest,
  };
};

export { useActions };
