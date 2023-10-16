import { ParametersActions, State } from '../paperworks.types';
import { reducerActions } from '../paperworks.constants';
import { useLoader } from '@/context';
import { useApi } from '@/hooks';
import { ENDPOINTS } from '@/api/endpoints';
import { PaperworksParameter } from '@/models/paperworks';

const useParametersActions = (state: State, dispatch: any): ParametersActions => {
  const { actions } = useLoader();
  const _getParametersCatalogs = useApi({ endpoint: ENDPOINTS.catalogParameters, method: 'get', withLoader: false });
  const _getParametersList = useApi({ endpoint: ENDPOINTS.procedureParameter, method: 'get', withLoader: false });
  const _getParameter = useApi({ endpoint: ENDPOINTS.procedureParameter, method: 'get', withLoader: false });
  const _createParameter = useApi({ endpoint: ENDPOINTS.procedureParameter, method: 'post', withLoader: false });
  const _updateParameter = useApi({ endpoint: ENDPOINTS.procedureParameter, method: 'put', withLoader: false });
  const _deleteParameter = useApi({ endpoint: ENDPOINTS.procedureParameter, method: 'delete', withLoader: false });

  const getParametersCatalogs = async (): Promise<void> => {
    try {
      actions?.showLoader(true);
      const parametersData = await _getParametersCatalogs();

      dispatch(reducerActions.setCatalogParameters(parametersData.data));
    } catch (error) {
      dispatch(reducerActions.setCatalogParameters([]));
    } finally {
      actions?.showLoader(false);
    }
  };

  const getParametersList = async (): Promise<void> => {
    try {
      actions?.showLoader(true);
      const reasonsData = await _getParametersList({
        queryString: {
          fields: 'procedureId',
          search: state.idPaperwork,
        },
      });

      dispatch(reducerActions.setParametersList(reasonsData.data));
    } catch (error) {
      dispatch(reducerActions.setParametersList([]));
    } finally {
      actions?.showLoader(false);
    }
  };

  const createParameter = async (data: PaperworksParameter) => {
    try {
      actions?.showLoader(true);

      const response = await _createParameter({
        body: {
          ...data,
          procedureId: state.idPaperwork,
        },
      });

      if (response.succeeded) {
        getParametersList();

        return {
          success: true,
        };
      }

      return {
        success: false,
        message: response.message,
      };
    } catch (error) {
      dispatch(reducerActions.setParametersList([]));

      return {
        success: false,
      };
    } finally {
      actions?.showLoader(false);
    }
  };

  const updateParameter = async (data: PaperworksParameter) => {
    try {
      actions?.showLoader(true);

      const response = await _updateParameter({
        body: {
          ...data,
          procedureId: state.idPaperwork,
        },
      });

      if (response.succeeded) {
        getParametersList();
      }

      return {
        success: response.succeeded,
      };
    } catch (error) {
      dispatch(reducerActions.setParametersList([]));

      return {
        success: false,
      };
    } finally {
      actions?.showLoader(false);
    }
  };

  const deleteParameter = async (id: number) => {
    try {
      actions?.showLoader(true);

      const response = await _deleteParameter({
        body: {
          id: id,
          autoSave: true,
        },
      });

      if (response.succeeded) {
        getParametersList();
      }

      return {
        success: response.succeeded,
      };
    } catch (error) {
      dispatch(reducerActions.setParametersList([]));

      return {
        success: false,
      };
    } finally {
      actions?.showLoader(false);
    }
  };

  const getParameter = async (id: number) => {
    try {
      const response = await _getParameter({
        urlParams: String(id),
      });

      if (response.succeeded) {
        const parameterData = response.data as PaperworksParameter;

        dispatch(reducerActions.setParameterEditData(parameterData));
      }
      return {
        success: response.succeeded,
      };
    } catch (error) {
      return {
        success: false,
      };
    }
  };

  const cleanSelectedParameter = () => {
    dispatch(reducerActions.setParameterEditData());
  };

  return {
    getParametersCatalogs,
    getParametersList,
    getParameter,
    createParameter,
    updateParameter,
    deleteParameter,
    cleanSelectedParameter,
  };
};

export { useParametersActions };
