export interface ConceptInterface {
  code: string;
  description: string;
  affectsTaxInformation: boolean;
  natureConceptId: string;
  lateFee: boolean;
  lateFeeConceptId: string;
  taxConceptId: string;
  measureTypeId: string;
  serviceTypeId: string;
  calculationMethodId: string;
  externalBillingMode: boolean;
  internalBillingMode: boolean;
  billingModeId: string;
  chargeTypeId: string;
}

export interface ConceptCalculationParametersInterface {
  conceptCode: string;
  description: string;
  currency: string | number;
  calculationOrder: number | string;
  printOrder: number | string;
  type: string | number | string;
  frequency: number | string;
  valueLimit: string;
  realValue: string;
  referenceValue: string;
  calculationTypeId: string;
  createdByUserId: string;
}

export const conceptFormInitialValue: ConceptInterface = {
  code: '',
  description: '',
  affectsTaxInformation: false,
  natureConceptId: '',
  lateFee: false,
  lateFeeConceptId: '',
  taxConceptId: '',
  measureTypeId: '',
  serviceTypeId: '',
  calculationMethodId: '',
  chargeTypeId: '',
  externalBillingMode: false,
  internalBillingMode: false,
  billingModeId: '',
};

export const conceptCalculationParametersInitialValue: ConceptCalculationParametersInterface = {
  conceptCode: '',
  description: '',
  currency: '',
  calculationOrder: '',
  printOrder: '',
  type: '',
  frequency: '',
  valueLimit: '',
  realValue: '',
  referenceValue: '',
  calculationTypeId: '',
  createdByUserId: '1',
};
