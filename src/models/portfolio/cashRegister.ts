import { Catalog } from '../commons';

export interface CashRegisterStatus extends Catalog {}

export interface CashRegister extends Catalog {
  currency: number;
  type: number | CashRegisterTypes;
  closingType: number | CashRegisterClosingTypes;
  closingDate: Date;
  account: number;
  bank: number;
  status: number | CashRegisterStatusValues;
}

export enum CashRegisterStatusValues {
  active = 'active',
  disabled = 'disabled',
  inClosingProcess = 'inClosingProcess',
  blocked = 'blocked',
}

export enum CashRegisterTypes {
  outsourced = 'outsourced',
  physical = 'physical',
  virtual = 'virtual',
}

export enum CashRegisterClosingTypes {
  automatic = 'automatic',
  manual = 'manual',
}

export interface CashRegisterMapped extends Catalog {
  currency: string;
  type: string;
  closingType: string;
  closingDate: Date;
  account: string;
  bank: string;
  status: string;
}
