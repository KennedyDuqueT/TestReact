export interface ProvisionalBillingInterface {
  id: string | number;
  supply: string | number;
  customerName: string;
  contractedPower: string | number;
  routeCode: string | number;
  rateDescription: string;
  meterCode: string | number;
  billingDate: string | number;
  currentReadingDate: string | number;
  daysToBilled: number | string;
  currentReading: number | string;
  previousReadingDate: number | string;
  previousReading: number | string;
  multiple: number | string;
  KWHBilled: number | string;
  KWHPowerReceived: number | string;
  rate: number | string;
  consumptionVariation: number | string;
  consumptionBilled: number | string;
  billedArrears: number | string;
  fixedCharges: number | string;
  powerDelivery: number | string;
  receivedPower: number | string;
  billedPower: number | string;
  otherConcepts: string | number;
  totalReceipt: string | number;
}

export interface ProvisionalBillingSearchInterface {
  typeCustomer: number[];
  cycleCode: string | number;
  year: string | number;
  month: string | number;
  lot: string | number;
}

export const provisionalBillingSearchInitialValue: ProvisionalBillingSearchInterface = {
  typeCustomer: [],
  cycleCode: '',
  year: '',
  month: '',
  lot: '',
};

export const provisionalBillingInitialValue: ProvisionalBillingInterface = {
  id: '',
  supply: '',
  customerName: '',
  contractedPower: '',
  routeCode: '',
  rateDescription: '',
  meterCode: '',
  billingDate: '',
  currentReadingDate: '',
  daysToBilled: '',
  currentReading: '',
  multiple: '',
  KWHBilled: '',
  rate: '',
  consumptionVariation: '',
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
