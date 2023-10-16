export interface GenerateBillingArchiveInterface {
  id: string | number;
  supply: string | number;
  customerName: string;
  contractedPower: string | number;
  routeCode: string | number;
  rateDescription: string;
  meterCode: string | number;
  billingDate: string | number;
  currentReadingDate: string | number;
  currentReading: number | string;
  previousReadingDate: number | string;
  previousReading: number | string;
  multiple: number | string;
  KWHBilled: number | string;
  KWHPowerReceived: number | string;
  rate: number | string;
  consumptionBilled: number | string;
  billedArrears: number | string;
  fixedCharges: number | string;
  powerDelivery: number | string;
  receivedPower: number | string;
  billedPower: number | string;
  otherConcepts: string | number;
  totalReceipt: string | number;
}

export const generateBillingArchiveInitialValue: GenerateBillingArchiveInterface = {
  id: '',
  supply: '',
  customerName: '',
  contractedPower: '',
  routeCode: '',
  rateDescription: '',
  meterCode: '',
  billingDate: '',
  currentReadingDate: '',
  currentReading: '',
  multiple: '',
  KWHBilled: '',
  rate: '',
  consumptionBilled: '',
  billedArrears: '',
  fixedCharges: '',
  powerDelivery: '',
  receivedPower: '',
  billedPower: '',
  otherConcepts: '',
  totalReceipt: '',
  KWHPowerReceived: '',
  previousReading: '',
  previousReadingDate: '',
};
