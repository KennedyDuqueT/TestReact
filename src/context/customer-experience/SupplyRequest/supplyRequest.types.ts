import { SupplyServiceType, CancelSupplyType } from '@/models/customer-experience';

export interface State {
  services: SupplyServiceType[];
  cancelSupply: CancelSupplyType;
}

export interface Actions {
  getAllSupplyRequest: () => void;
  getCancelSupply: () => void;
}

export interface ContextType extends State {
  actions?: Actions;
}
