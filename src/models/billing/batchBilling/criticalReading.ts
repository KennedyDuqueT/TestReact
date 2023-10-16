export interface CriticalReadingSearchInterface {
  typeCustomer: number[];
  cycleCode: string | number;
  routeCode: string | number;
  year: string | number;
  month: string | number;
  serviceType: string | number;
}

export interface CriticalReadingInterface {
  id: string | number;
  status: string | number;
  downloadDate: string;
  supply: string | number;
  period: string | number;
  lotCode: string | number;
  serialCode: string | number;
  conceptCode: string | number;
  typeServices: string | number;
  typeReading: string | number;
  codeReading: string | number;
  consumption: string | number;
  cycleCode: string | number;
  routeCode: string | number;
  typeCustomer: number[];
  meterCode: string | number;
  quantityReadings: number | string;
}

export const criticalReadingSearchInitialValue: CriticalReadingSearchInterface = {
  typeCustomer: [],
  cycleCode: '',
  routeCode: '',
  year: '',
  month: '',
  serviceType: '',
};

export const criticalReadingInitialValue: CriticalReadingInterface = {
  id: '',
  status: '',
  cycleCode: '',
  supply: '',
  downloadDate: '',
  meterCode: '',
  quantityReadings: '',
  routeCode: '',
  typeCustomer: [],
  codeReading: '',
  conceptCode: '',
  consumption: '',
  lotCode: '',
  period: '',
  serialCode: '',
  typeReading: '',
  typeServices: '',
};
