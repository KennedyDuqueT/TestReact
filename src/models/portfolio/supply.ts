import { Catalog } from '../commons';

export enum SupplyStatusValues {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  SUSPENDED = 'suspended',
  WITH_WARNING = 'warning',
  LEGAL_RETURN = 'legalReturn',
}

export enum SupplyOperationStatusValues {
  PENDING = 'pending',
  CANCELED = 'canceled',
  RESOLVED = 'resolved',
}

export interface Supply {
  id?: number;
  name: string;
  description: string;
  supplyStatusId: number;
  measureId: number;
  routeId: number;
  clientId: number;
}

export interface BasicSupply {
  id: number;
  supplyNumber: string;
  status: string;
  amountLate: number;
}

export interface SupplyPairForDebtTransfer {
  id?: number;
  pairId?: number;
  debtSupplyNumber: string;
  destinationSupplyNumber: string;
  amountLate: number;
  status: string;
}

export interface SearchSupplyParams {
  client: string;
  supply: string;
}

export interface SupplyStatus extends Catalog {}
