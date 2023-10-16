import { SimpleCatalog } from '@/models/commons';
import { createAction } from '@/utils';

export enum Types {
  LOAD_INITIAL_INFO = 'conceptManagement/loadInitialInfo',
  SAVE_CONCEPT = 'conceptManagement/saveConcept',
  SET_NATURE_CONCEPT = 'conceptManagement/setNatureConcept',
  SET_TAX_CONCEPT = 'conceptManagement/setTaxConcept',
  SET_UNITS_MEASURE = 'conceptManagement/setMeasureType',
  SET_CALCULATION_METHOD = 'conceptManagement/setCalculationMethod',
  SET_CALCULATION_TYPE = 'conceptManagement/setCalculationType',
  SET_CHARGE_TYPE = 'conceptManagement/setChargeType',
}

export enum API {
  GET_NATURE_CONCEPT_ROUTE = 'billing/api/natureConcept',
  GET_TAX_CONCEPT_ROUTE = 'billing/api/taxConcept',
  GET_UNITS_MEASURE_ROUTE = 'billing/api/measureType',
  GET_CHARGE_TYPE_ROUTE = 'billing/api/chargeType',
  GET_CALCULATION_METHOD_ROUTE = 'billing/api/calculationMethod',
  GET_CALCULATION_TYPE_ROUTE = 'billing/api/calculationType',
  CONCEPT_MANAGEMENT_ROUTE = 'billing/api/invoiceConcept',
  CALCULATION_PARAMETER_ROUTE = 'billing/api/calculationParameter',
}

export const reducerActions = {
  setNatureConcept: createAction<Types, SimpleCatalog[]>(Types.SET_NATURE_CONCEPT),
  setTaxConcept: createAction<Types, SimpleCatalog[]>(Types.SET_TAX_CONCEPT),
  setMeasureType: createAction<Types, SimpleCatalog[]>(Types.SET_UNITS_MEASURE),
  setChargeType: createAction<Types, SimpleCatalog[]>(Types.SET_CHARGE_TYPE),
  setCalculationMethod: createAction<Types, SimpleCatalog[]>(Types.SET_CALCULATION_METHOD),
  setCalculationType: createAction<Types, SimpleCatalog[]>(Types.SET_CALCULATION_TYPE),
};
