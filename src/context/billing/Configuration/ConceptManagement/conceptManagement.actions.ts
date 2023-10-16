import { API, reducerActions } from './conceptManagement.constants';
import { Actions, State } from './conceptManagement.types';
import { useLoader } from '@/context/loader';
import { useApi } from '@/hooks';
import { BillingModels } from '@/models';

const useActions = (state: State, dispatch: any): Actions => {
  const { actions } = useLoader();
  const getNatureConcept = useApi({ endpoint: API.GET_NATURE_CONCEPT_ROUTE, method: 'get', withLoader: false });
  const getTaxConcept = useApi({ endpoint: API.GET_TAX_CONCEPT_ROUTE, method: 'get', withLoader: false });
  const getUnitsMeasure = useApi({ endpoint: API.GET_UNITS_MEASURE_ROUTE, method: 'get', withLoader: false });
  const getChargeType = useApi({ endpoint: API.GET_CHARGE_TYPE_ROUTE, method: 'get', withLoader: false });
  const getCalculationMethod = useApi({ endpoint: API.GET_CALCULATION_METHOD_ROUTE, method: 'get', withLoader: false });
  const getCalculationType = useApi({ endpoint: API.GET_CALCULATION_TYPE_ROUTE, method: 'get', withLoader: false });
  const saveConceptApi = useApi({ endpoint: API.CONCEPT_MANAGEMENT_ROUTE, method: 'post', withLoader: false });
  const saveCalculationParameterApi = useApi({ endpoint: API.CALCULATION_PARAMETER_ROUTE, method: 'post', withLoader: false });

  const loadInitialInfo = async (): Promise<void> => {
    try {
      actions?.showLoader(true);
      dispatch(reducerActions.setChargeType((await getChargeType()).data));
      dispatch(reducerActions.setMeasureType((await getUnitsMeasure()).data));
      dispatch(reducerActions.setNatureConcept((await getNatureConcept()).data));
      dispatch(reducerActions.setTaxConcept((await getTaxConcept()).data));
      dispatch(reducerActions.setCalculationMethod((await getCalculationMethod()).data));
      dispatch(reducerActions.setCalculationType((await getCalculationType()).data));
    } catch (error) {
      // TODO: Implement error validation
    } finally {
      actions?.showLoader(false);
    }
  };

  const saveConcept = async (newConceptToSave: BillingModels.ConceptInterface): Promise<boolean> => {
    try {
      actions?.showLoader(true);
      const result = await saveConceptApi({
        body: newConceptToSave,
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

  const saveCalculationParameter = async (newCalculationParameterToSave: BillingModels.ConceptCalculationParametersInterface): Promise<boolean> => {
    try {
      actions?.showLoader(true);
      const result = await saveCalculationParameterApi({
        body: newCalculationParameterToSave,
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
    loadInitialInfo,
    saveConcept,
    saveCalculationParameter,
  };
};

export { useActions };
