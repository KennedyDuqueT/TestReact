import { API } from './parametersManagement.constants';
import { Actions } from './parametersManagement.types';
import { useLoader } from '@/context/loader';
import { useApi } from '@/hooks';
import { BillingModels } from '@/models';

const useActions = (): Actions => {
  const { actions } = useLoader();
  const saveNatureConceptApi = useApi({ endpoint: API.NATURE_CONCEPT_PARAMETER_ROUTE, method: 'post', withLoader: false });
  const saveTaxesApi = useApi({ endpoint: API.TAXES_PARAMETER_ROUTE, method: 'post', withLoader: false });
  const saveUnitsMeasureApi = useApi({ endpoint: API.UNITS_MEASURE_PARAMETER_ROUTE, method: 'post', withLoader: false });
  const saveCalculationMethodApi = useApi({ endpoint: API.CALCULATION_METHOD_PARAMETER_ROUTE, method: 'post', withLoader: false });
  const saveCausesAverageBillingApi = useApi({ endpoint: API.CAUSES_AVERAGE_BILLING_PARAMETER_ROUTE, method: 'post', withLoader: false });
  const saveFCBillingPeriodApi = useApi({ endpoint: API.FC_BILLING_PERIOD_PARAMETER_ROUTE, method: 'post', withLoader: false });
  const saveBillingTypeApi = useApi({ endpoint: API.BILLING_TYPE_PARAMETER_ROUTE, method: 'post', withLoader: false });
  const saveChargeTypeApi = useApi({ endpoint: API.CHARGE_TYPE_PARAMETER_ROUTE, method: 'post', withLoader: false });
  const saveCalculationTypeApi = useApi({ endpoint: API.CALCULATION_TYPE_PARAMETER_ROUTE, method: 'post', withLoader: false });
  const saveBillingModeApi = useApi({ endpoint: API.BILLING_MODE_PARAMETER_ROUTE, method: 'post', withLoader: false });

  const saveNatureConcept = async (newNatureConceptToSave: BillingModels.ParameterNatureConceptInterface): Promise<boolean> => {
    try {
      actions?.showLoader(true);
      const result = await saveNatureConceptApi({
        body: {
          name: '',
          description: newNatureConceptToSave.description,
          code: newNatureConceptToSave.code,
          serviceTypeId: newNatureConceptToSave.serviceTypeId,
          createdByUserId: newNatureConceptToSave.createdByUserId,
        },
      });
      return result.succeeded;
    } catch (error) {
      console.error(error);
      // TODO: Implement error validation
      return false;
    } finally {
      actions?.showLoader(false);
    }
  };

  const saveTaxes = async (newTaxesConceptToSave: BillingModels.ParameterTaxesInterface): Promise<boolean> => {
    try {
      actions?.showLoader(true);
      const result = await saveTaxesApi({
        body: {
          name: '',
          description: newTaxesConceptToSave.description,
          code: newTaxesConceptToSave.code,
          serviceTypeId: newTaxesConceptToSave.serviceTypeId,
          createdByUserId: newTaxesConceptToSave.createdByUserId,
        },
      });
      return result.succeeded;
    } catch (error) {
      console.error(error);
      // TODO: Implement error validation
      return false;
    } finally {
      actions?.showLoader(false);
    }
  };

  const saveUnitsMeasure = async (newUnitsMeasureToSave: BillingModels.ParameterUnitsMeasureInterface): Promise<boolean> => {
    try {
      actions?.showLoader(true);
      const result = await saveUnitsMeasureApi({
        body: newUnitsMeasureToSave,
      });
      return result.succeeded;
    } catch (error) {
      console.error(error);
      // TODO: Implement error validation
      return false;
    } finally {
      actions?.showLoader(false);
    }
  };

  const saveCalculationMethod = async (newCalculationMethodToSave: BillingModels.ParameterCalculationMethodInterface): Promise<boolean> => {
    try {
      actions?.showLoader(true);
      const result = await saveCalculationMethodApi({
        body: {
          name: '',
          description: newCalculationMethodToSave.description,
          code: newCalculationMethodToSave.code,
          serviceTypeId: newCalculationMethodToSave.serviceTypeId,
          createdByUserId: newCalculationMethodToSave.createdByUserId,
        },
      });
      return result.succeeded;
    } catch (error) {
      console.error(error);
      // TODO: Implement error validation
      return false;
    } finally {
      actions?.showLoader(false);
    }
  };

  const saveCausesAverageBilling = async (newCausesAverageBillingToSave: BillingModels.ParameterCausesAverageBillingInterface): Promise<boolean> => {
    try {
      actions?.showLoader(true);
      const result = await saveCausesAverageBillingApi({
        body: {
          name: '',
          description: newCausesAverageBillingToSave.description,
          code: newCausesAverageBillingToSave.code,
          serviceTypeId: newCausesAverageBillingToSave.serviceTypeId,
          createdByUserId: newCausesAverageBillingToSave.createdByUserId,
        },
      });
      return result.succeeded;
    } catch (error) {
      console.error(error);
      // TODO: Implement error validation
      return false;
    } finally {
      actions?.showLoader(false);
    }
  };

  const saveFCBillingPeriod = async (newFCBillingPeriodToSave: BillingModels.ParameterFCBillingPeriodInterface): Promise<boolean> => {
    try {
      actions?.showLoader(true);
      const result = await saveFCBillingPeriodApi({
        body: {
          name: '',
          description: newFCBillingPeriodToSave.description,
          code: newFCBillingPeriodToSave.code,
          serviceTypeId: newFCBillingPeriodToSave.serviceTypeId,
          period: newFCBillingPeriodToSave.period,
          frequencyId: newFCBillingPeriodToSave.frequencyId,
          createdByUserId: newFCBillingPeriodToSave.createdByUserId,
        },
      });
      return result.succeeded;
    } catch (error) {
      console.error(error);
      // TODO: Implement error validation
      return false;
    } finally {
      actions?.showLoader(false);
    }
  };

  const saveBillingType = async (newBillingTypeToSave: BillingModels.ParameterBillingTypeInterface): Promise<boolean> => {
    try {
      actions?.showLoader(true);
      const result = await saveBillingTypeApi({
        body: {
          name: '',
          description: newBillingTypeToSave.description,
          code: newBillingTypeToSave.code,
          serviceTypeId: newBillingTypeToSave.serviceTypeId,
          createdByUserId: newBillingTypeToSave.createdByUserId,
        },
      });
      return result.succeeded;
    } catch (error) {
      console.error(error);
      // TODO: Implement error validation
      return false;
    } finally {
      actions?.showLoader(false);
    }
  };

  const saveChargeType = async (newChargeTypeToSave: BillingModels.ParameterChargeTypeInterface): Promise<boolean> => {
    try {
      actions?.showLoader(true);
      const result = await saveChargeTypeApi({
        body: {
          name: '',
          description: newChargeTypeToSave.description,
          code: newChargeTypeToSave.code,
          serviceTypeId: newChargeTypeToSave.serviceTypeId,
          createdByUserId: newChargeTypeToSave.createdByUserId,
        },
      });
      return result.succeeded;
    } catch (error) {
      console.error(error);
      // TODO: Implement error validation
      return false;
    } finally {
      actions?.showLoader(false);
    }
  };

  const saveCalculationType = async (newCalculationTypeToSave: BillingModels.ParameterCalculationTypeInterface): Promise<boolean> => {
    try {
      actions?.showLoader(true);
      const result = await saveCalculationTypeApi({
        body: {
          name: '',
          description: newCalculationTypeToSave.description,
          code: newCalculationTypeToSave.code,
          serviceTypeId: newCalculationTypeToSave.serviceTypeId,
          createdByUserId: newCalculationTypeToSave.createdByUserId,
        },
      });
      return result.succeeded;
    } catch (error) {
      console.error(error);
      // TODO: Implement error validation
      return false;
    } finally {
      actions?.showLoader(false);
    }
  };

  const saveBillingMode = async (newBillingModeToSave: BillingModels.ParameterBillingModeInterface): Promise<boolean> => {
    try {
      actions?.showLoader(true);
      const result = await saveBillingModeApi({
        body: {
          name: '',
          description: newBillingModeToSave.description,
          code: newBillingModeToSave.code,
          serviceTypeId: newBillingModeToSave.serviceTypeId,
          createdByUserId: newBillingModeToSave.createdByUserId,
        },
      });
      return result.succeeded;
    } catch (error) {
      console.error(error);
      // TODO: Implement error validation
      return false;
    } finally {
      actions?.showLoader(false);
    }
  };

  return {
    saveNatureConcept,
    saveTaxes,
    saveUnitsMeasure,
    saveCalculationMethod,
    saveBillingType,
    saveCausesAverageBilling,
    saveFCBillingPeriod,
    saveBillingMode,
    saveCalculationType,
    saveChargeType,
  };
};

export { useActions };
