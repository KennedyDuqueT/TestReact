export interface ElectronicBillStampingFormInterface {
  cycleId: number | string;
  routeId: number | string;
  toDate: string;
  fromDate: string;
}

export interface SelectedRegisters {
  selectedRegistersLabel: number;
}

export interface ElectronicBillStampingInterface {
  status: string;
  id: string | number;
  supplyId: string;
  companyName: string;
  customerId: string;
  typeId: number | string;
  cycleId: number | string;
  dateIssue: string;
  conceptDescription: string;
  rateId: string;
  rateType: string;
  currencyId: string;
  exchangeRate: number | string;
  priceUnit: number | string;
  ITBIS: number | string;
  subtotalWithoutITBIS: number | string;
  total: number | string;
  ENFC: string;
  transactionType: string;
  expirationDate: string;
  formOfPayment: string;
}

export const electronicBillStampingFormInitialValue: ElectronicBillStampingFormInterface = {
  cycleId: '',
  fromDate: '',
  routeId: '',
  toDate: '',
};

export const selectedRegistersFormInitialValue: SelectedRegisters = {
  selectedRegistersLabel: 0,
};

export const electronicBillStampingInitialValue: ElectronicBillStampingInterface = {
  status: '',
  id: '',
  conceptDescription: '',
  currencyId: '',
  customerId: '',
  cycleId: '',
  dateIssue: '',
  ENFC: '',
  exchangeRate: '',
  expirationDate: '',
  formOfPayment: '',
  ITBIS: '',
  companyName: '',
  priceUnit: '',
  rateId: '',
  rateType: '',
  subtotalWithoutITBIS: '',
  supplyId: '',
  total: '',
  transactionType: '',
  typeId: '',
};
