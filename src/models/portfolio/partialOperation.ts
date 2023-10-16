import { Catalog } from '../commons';

export interface Invoice {
  id: number;
  invoiceNumber: string;
  date: string;
  expirationDate: string;
  amount: number;
  pendingAmount: number;
}

export interface SupplyForOperation {
  id?: number;
  contractNumber: string;
  contractType: string;
  meterNumber: string;
  serviceType: string;
}

export interface PartialOperationFormValues extends SupplyForOperation {
  company: number;
  orderType: number;
  reason: number;
}

export interface OrderType extends Catalog {}
export interface Reason extends Catalog {}
