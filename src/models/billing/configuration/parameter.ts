export interface ParameterNatureConceptInterface {
  id: string | null;
  code: string;
  description: string;
  serviceTypeId: string | number;
  createdByUserId: string | number;
}

export interface ParameterTaxesInterface {
  id: string | null;
  code: string;
  description: string;
  serviceTypeId: string | number;
  createdByUserId: string | number;
}

export interface ParameterUnitsMeasureInterface {
  id: string | null;
  code: string;
  name: string;
  description: string;
  serviceTypeId: string | number;
  createdByUserId: string | number;
}

export interface ParameterCalculationMethodInterface {
  id: string | null;
  code: string;
  description: string;
  serviceTypeId: string | number;
  createdByUserId: string | number;
}
export interface ParameterServiceGroupInterface {}

export interface ParameterCausesAverageBillingInterface {
  id: string | null;
  code: string;
  description: string;
  serviceTypeId: string | number;
  createdByUserId: string | number;
}

export interface ParameterFCBillingPeriodInterface {
  id: string | null;
  code: string;
  description: string;
  serviceTypeId: string | number;
  period: string | number;
  frequencyId: string | number;
  createdByUserId: string | number;
}

export interface ParameterBillingTypeInterface {
  id: string | null;
  code: string;
  description: string;
  serviceTypeId: string | number;
  createdByUserId: string | number;
}

export interface ParameterChargeTypeInterface {
  id: string | null;
  code: string;
  description: string;
  serviceTypeId: string | number;
  createdByUserId: string | number;
}

export interface ParameterCalculationTypeInterface {
  id: string | null;
  code: string;
  description: string;
  serviceTypeId: string | number;
  createdByUserId: string | number;
}

export interface ParameterBillingModeInterface {
  id: string | null;
  code: string;
  description: string;
  serviceTypeId: string | number;
  createdByUserId: string | number;
}
