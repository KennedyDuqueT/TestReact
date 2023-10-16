import { BillingModels } from '@/models';

export interface Actions {
  saveNatureConcept: (newNatureConceptToSave: BillingModels.ParameterNatureConceptInterface) => Promise<boolean>;
  saveTaxes: (newTaxesToSave: BillingModels.ParameterTaxesInterface) => Promise<boolean>;
  saveUnitsMeasure: (newUnitsMeasureToSave: BillingModels.ParameterUnitsMeasureInterface) => Promise<boolean>;
  saveCalculationMethod: (newCalculationMethodToSave: BillingModels.ParameterCalculationMethodInterface) => Promise<boolean>;
  saveCausesAverageBilling: (newCausesAverageBillingToSave: BillingModels.ParameterCausesAverageBillingInterface) => Promise<boolean>;
  saveFCBillingPeriod: (newFCBillingPeriodToSave: BillingModels.ParameterFCBillingPeriodInterface) => Promise<boolean>;
  saveBillingType: (newBillingTypeToSave: BillingModels.ParameterBillingTypeInterface) => Promise<boolean>;
  saveChargeType: (newChargeTypeToSave: BillingModels.ParameterChargeTypeInterface) => Promise<boolean>;
  saveCalculationType: (newCalculationTypeToSave: BillingModels.ParameterCalculationTypeInterface) => Promise<boolean>;
  saveBillingMode: (newBillingModeToSave: BillingModels.ParameterBillingModeInterface) => Promise<boolean>;
}

export interface ContextType {
  actions?: Actions;
}
