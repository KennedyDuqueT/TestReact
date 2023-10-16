import { BillingModels } from '@/models';

export interface State {
  natureConcept: BillingModels.ParameterNatureConceptInterface[];
  taxConcept: BillingModels.ParameterTaxesInterface[];
  unitsMeasure: BillingModels.ParameterUnitsMeasureInterface[];
  chargeType: BillingModels.ParameterChargeTypeInterface[];
  calculationMethod: BillingModels.ParameterCalculationMethodInterface[];
  calculationType: BillingModels.ParameterCalculationTypeInterface[];
}

export interface Actions {
  saveConcept: (newConceptToSave: BillingModels.ConceptInterface) => Promise<boolean>;
  saveCalculationParameter: (newCalculationParameterToSave: BillingModels.ConceptCalculationParametersInterface) => Promise<boolean>;
  loadInitialInfo: () => Promise<void>;
}

export interface ContextType extends State {
  actions?: Actions;
}
