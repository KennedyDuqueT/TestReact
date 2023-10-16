export interface TariffSchedulesFilterInterface {
  serviceType: string | number;
  currency: string | number;
  fromDate: string;
  toDate: string;
}

export interface TariffSchedulesInterface {
  id: string;
  code: string | number;
  createDate: string;
  serviceType: string | number;
  currency: string | number;
  rate: string | number;
  codeConcept: string | number;
  conceptDescription: string | number;
  realValue: string | number;
  referenceValue: string | number;
  calculationType: string | number;
  typeRate: string | number;
  status: string | number;
}

export const tariffSchedulesFilterInitialValue: TariffSchedulesFilterInterface = {
  currency: '',
  fromDate: '',
  serviceType: '',
  toDate: '',
};

export const tariffSchedulesInitialValue: TariffSchedulesInterface = {
  id: '',
  code: '',
  status: '',
  currency: '',
  calculationType: '',
  codeConcept: '',
  serviceType: '',
  conceptDescription: '',
  createDate: '',
  rate: '',
  realValue: '',
  referenceValue: '',
  typeRate: '',
};
