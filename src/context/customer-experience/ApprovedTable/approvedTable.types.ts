import { LoadElecDevicesTableInterface, SubFarmCostTableInterface } from '@/models/customer-experience';

export interface State {
  elecDevices: LoadElecDevicesTableInterface[];
  subFarmCosts: SubFarmCostTableInterface[];
}

export interface Actions {
  getAllElecDevicesRequest: () => void;
  getAllSubFarmCostRequest: () => void;
  addElecDeviceRequest: (data: LoadElecDevicesTableInterface) => void;
  removeElecDeviceRequest: (data: number) => void;
  editElecDeviceRequest: (data: LoadElecDevicesTableInterface) => void;
}

export interface ContextType extends State {
  actions?: Actions;
}
