import { ReasonsActions, State } from '../paperworks.types';
import { reducerActions } from '../paperworks.constants';
import { useLoader } from '@/context';
import { ENDPOINTS } from '@/api/endpoints';
import { useApi } from '@/hooks';

const useReasonsActions = (state: State, dispatch: any): ReasonsActions => {
  const { actions } = useLoader();
  const reasonsResponse = useApi({ endpoint: ENDPOINTS.catalogReasons, method: 'get', withLoader: false });
  const procedureReasonResponse = useApi({ endpoint: ENDPOINTS.procedureReason, method: 'get', withLoader: false });
  const getEditDataReasons = useApi({ endpoint: ENDPOINTS.procedureReason, method: 'get', withLoader: false });
  const postCreateReason = useApi({ endpoint: ENDPOINTS.procedureReason, method: 'post', withLoader: false });
  const putUpdateReasons = useApi({ endpoint: ENDPOINTS.procedureReason, method: 'put', withLoader: false });
  const deleteReasonsById = useApi({ endpoint: ENDPOINTS.procedureReason, method: 'delete', withLoader: false });

  const getReasonsCatalogs = async (): Promise<void> => {
    try {
      actions?.showLoader(true);
      const reasonsData = await reasonsResponse();

      dispatch(reducerActions.setCatalogReasons(reasonsData.data));
    } catch (error) {
      dispatch(reducerActions.setCatalogReasons([]));
    } finally {
      actions?.showLoader(false);
    }
  };

  const getReasonsList = async (): Promise<void> => {
    try {
      actions?.showLoader(true);
      const reasonsData = await procedureReasonResponse({
        queryString: {
          fields: 'procedureId',
          search: state.idPaperwork,
        },
      });
      if (reasonsData.succeeded) {
        const newReasonsList = reasonsData.data.map((item: any) => ({
          id: item.id,
          code: item.id,
          description: item.description,
        }));

        dispatch(reducerActions.setReasonsList(newReasonsList));
      }
    } catch (error) {
      dispatch(reducerActions.setReasonsList([]));
    } finally {
      actions?.showLoader(false);
    }
  };

  const createReason = async (data: any) => {
    const { reasonCode, description } = data;

    try {
      actions?.showLoader(true);
      const reasonsData = await postCreateReason({
        body: {
          procedureId: state.idPaperwork,
          reasonId: reasonCode,
          name: '',
          description,
        },
      });

      if (reasonsData.succeeded) {
        getReasonsList();
        return {
          success: true,
        };
      }
      return {
        success: false,
        message: reasonsData.message,
      };
    } catch (error) {
      dispatch(reducerActions.setReasonsList([]));
      return {
        success: false,
      };
    } finally {
      actions?.showLoader(false);
    }
  };

  const updateReason = async (data: any) => {
    const { reasonCode, description } = data;

    try {
      actions?.showLoader(true);
      const reasonsData = await putUpdateReasons({
        body: {
          id: state.reasonsDataEdit.id,
          procedureId: state.idPaperwork,
          reasonId: reasonCode,
          name: '',
          description,
        },
      });

      if (reasonsData.succeeded) {
        getReasonsList();
      }
      return {
        success: reasonsData.succeeded,
      };
    } catch (error) {
      dispatch(reducerActions.setReasonsList([]));
      return {
        success: false,
      };
    } finally {
      actions?.showLoader(false);
    }
  };

  const deleteReason = async (id: number) => {
    try {
      actions?.showLoader(true);
      const deleteReason = await deleteReasonsById({
        body: {
          id: id,
          autoSave: true,
        },
      });

      if (deleteReason.succeeded) {
        getReasonsList();
      }
      return {
        success: deleteReason.succeeded,
      };
    } catch (error) {
      dispatch(reducerActions.setReasonsList([]));
      return {
        success: false,
      };
    } finally {
      actions?.showLoader(false);
    }
  };

  const getEditData = async (id: number) => {
    try {
      const editData = await getEditDataReasons({
        urlParams: String(id),
      });

      if (editData.succeeded) {
        const { id, reasonId, description } = editData.data;
        dispatch(
          reducerActions.setReasonEditData({
            id,
            reasonCode: reasonId,
            description,
          })
        );
      }
      return {
        success: editData.succeeded,
      };
    } catch (error) {
      return {
        success: false,
      };
    }
  };

  return {
    createReason,
    updateReason,
    getReasonsCatalogs,
    getReasonsList,
    getEditData,
    deleteReason,
  };
};

export { useReasonsActions };
