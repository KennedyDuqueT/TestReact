export interface IndividualBillingFilterInterface {
  id: string | number;
  serviceType: number[];
  supplyCode: string | number;
  customerName: string;
  RNC: string;
  identificationCard: string | number;
  cycleCode: string | number;
  routeCode: string | number;
  year: string | number;
  month: string | number;
  fromDate: string;
  toDate: string;
  status: string | number;
}

export interface IndividualBillingInterface {
  id: string | number;
  supplyCode: string | number;
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
  status: string | number;
}

export const individualBillingSearchInitialValue: IndividualBillingFilterInterface = {
  id: '',
  serviceType: [],
  cycleCode: '',
  year: '',
  month: '',
  fromDate: '',
  identificationCard: '',
  customerName: '',
  RNC: '',
  routeCode: '',
  supplyCode: '',
  toDate: '',
  status: '',
};

export const individualBillingInitialValue: IndividualBillingInterface = {
  id: '',
  billedArrears: '',
  billedPower: '',
  billingDate: '',
  consumptionBilled: '',
  contractedPower: '',
  currentReading: '',
  currentReadingDate: '',
  customerName: '',
  fixedCharges: '',
  KWHBilled: '',
  KWHPowerReceived: '',
  meterCode: '',
  multiple: '',
  otherConcepts: '',
  powerDelivery: '',
  previousReading: '',
  previousReadingDate: '',
  rate: '',
  rateDescription: '',
  receivedPower: '',
  routeCode: '',
  supplyCode: '',
  totalReceipt: '',
  status: '',
};
