import { Catalog, CurrencyValues as Currency } from '../commons';
import { Supply, SupplyOperationStatusValues, SupplyStatus, SupplyStatusValues } from './supply';

export interface LotStatus extends Catalog {}

export interface BasicSupplyLot {
  id?: number;
  fullName: string;
}

export enum LotStatusValues {
  SUSPENDED = 'suspended',
  DISCONNECTED = 'disconnected',
  SEND_TO_LEGAL = 'sentToLegal',
  PENALIZED = 'penalized',
}

export enum LotTypeValues {
  SUSPENSION = 'suspension',
  VERIFICATION = 'verification',
  REMOVAL = 'removal',
  LEGAL = 'legal',
  PRELEGAL = 'prelegal',
}

export interface SupplyLot extends BasicSupplyLot {
  number: number;
  month: string;
  supplyQuantity: number;
  collectionAmount: number;
  amountLate: number;
  status: string | LotStatus | LotStatusValues;
  supplyLotStatus: string | SupplyStatus;
  lotCreationDate: string;
  lotUpdateDate?: string;
  type?: LotTypeValues;
}

export interface SupplyLotDetailItem extends Partial<Supply> {
  supplyId: number;
  measureNumber: string;
  supplyNumber: string;
  supplyStatus: string | SupplyStatusValues;
  clientName: string;
  route: string;
  amountLate: number;
  issueDate: string;
  currency?: Currency;
  operationStatus?: string | SupplyOperationStatusValues;
  collectionAmount?: number;
}

export enum SupplyLotActions {
  VERIFY = 'verify',
  REMOVE = 'remove',
  SEND_TO_LEGAL = 'sendToLegal',
  DEBT_TRANSFER = 'debtTransfer',
  PROCESS = 'process',
  DELETE = 'delete',
}
