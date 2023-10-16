import { BillingModels } from '@/models';
import { SuccessIcon } from '@/assets';
import { CommonsModels } from '@/models';

export const modalConfigurationInitialValue: CommonsModels.ModalConfiguration = {
  buttonText: '',
  icon: SuccessIcon,
  message: '',
  modalTitle: '',
};

export const ParameterNatureConceptFormInitialValue: BillingModels.ParameterNatureConceptInterface = {
  id: null,
  code: '',
  description: '',
  serviceTypeId: '',
  createdByUserId: 1,
};

export const ParameterTaxesFormInitialValue: BillingModels.ParameterTaxesInterface = {
  id: null,
  code: '',
  description: '',
  serviceTypeId: '',
  createdByUserId: 1,
};

export const ParameterUnitsMeasureFormInitialValue: BillingModels.ParameterUnitsMeasureInterface = {
  id: null,
  code: '',
  name: '',
  description: '',
  serviceTypeId: '',
  createdByUserId: 1,
};

export const ParameterCalculationMethodFormInitialValue: BillingModels.ParameterCalculationMethodInterface = {
  id: null,
  code: '',
  description: '',
  serviceTypeId: '',
  createdByUserId: 1,
};

export const ParameterCausesAverageFormInitialValue: BillingModels.ParameterCausesAverageBillingInterface = {
  id: null,
  code: '',
  description: '',
  serviceTypeId: '',
  createdByUserId: 1,
};

export const ParameterFCBillingPeriodFormInitialValue: BillingModels.ParameterFCBillingPeriodInterface = {
  id: null,
  code: '',
  description: '',
  serviceTypeId: '',
  frequencyId: '',
  period: '',
  createdByUserId: 1,
};

export const ParameterBillingTypeFormInitialValue: BillingModels.ParameterBillingTypeInterface = {
  id: '',
  code: '',
  description: '',
  serviceTypeId: '',
  createdByUserId: 1,
};

export const ParameterChargeTypeFormInitialValue: BillingModels.ParameterChargeTypeInterface = {
  id: '',
  code: '',
  description: '',
  serviceTypeId: '',
  createdByUserId: 1,
};

export const ParameterCalculationTypeFormInitialValue: BillingModels.ParameterCalculationTypeInterface = {
  id: '',
  code: '',
  description: '',
  serviceTypeId: '',
  createdByUserId: 1,
};

export const ParameterBillingModeFormInitialValue: BillingModels.ParameterBillingModeInterface = {
  id: '',
  code: '',
  description: '',
  serviceTypeId: '',
  createdByUserId: 1,
};
