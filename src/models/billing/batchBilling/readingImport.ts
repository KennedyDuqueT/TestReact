export interface ReadingImportFilterInterface {
  typeCustomer: number[];
  cycleCode: string | number;
  routeCode: string | number;
  year: string | number;
  month: string | number;
  serviceType: string | number;
  fromDate: string | number;
  toDate: string | number;
}

export interface ReadingImportInterface {
  id: string | number;
  status: string | number;
  orderCode: string | string;
  supply: string | number;
  company: string | number;
  customerName: string | number;
  action: string | number;
  routeCode: string | number;
  meterCode: string | number;
  reading: string | number;
}

export const readingImportFilterInitialValue: ReadingImportFilterInterface = {
  typeCustomer: [],
  cycleCode: '',
  routeCode: '',
  year: '',
  month: '',
  serviceType: '',
  fromDate: '',
  toDate: '',
};

export const readingImportInitialValue: ReadingImportInterface = {
  id: '',
  status: '',
  orderCode: '',
  supply: '',
  company: '',
  customerName: '',
  action: '',
  routeCode: '',
  meterCode: '',
  reading: '',
};
