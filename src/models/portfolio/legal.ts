import { SupplyStatus } from './supply';

export interface LegalReturnFormValues {
  supplyListFileToProcess: string;
}

export interface ProcessedSupply {
  id?: number;
  number: string;
  meterNumber: string;
  supplyStatus: string | SupplyStatus;
  clientName: string;
  amountLate: number;
  route: string;
}
