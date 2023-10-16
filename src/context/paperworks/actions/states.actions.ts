import { StatesActions, State } from '../paperworks.types';
import { reducerActions } from '../paperworks.constants';
import { useLoader } from '@/context';
import { ENDPOINTS } from '@/api/endpoints';
import { useApi } from '@/hooks';

const useStatesActions = (state: State, dispatch: any): StatesActions => {
  const { actions } = useLoader();
  const getTasks = useApi({ endpoint: ENDPOINTS.getTasks, method: 'get' });
  const getWoTypes = useApi({ endpoint: ENDPOINTS.getWoByType, method: 'get' });
  const getStates = useApi({ endpoint: ENDPOINTS.getStates, method: 'get' });
  const getStateListById = useApi({ endpoint: ENDPOINTS.procedureStages, method: 'get', withLoader: false });
  const getReports = useApi({ endpoint: ENDPOINTS.getReports, method: 'get' });
  const postCreateState = useApi({ endpoint: ENDPOINTS.procedureStages, method: 'post' });
  const putUpdateState = useApi({ endpoint: ENDPOINTS.procedureStages, method: 'put' });
  const getStateById = useApi({ endpoint: ENDPOINTS.procedureStages, method: 'get' });
  const deleteStateById = useApi({ endpoint: ENDPOINTS.procedureStages, method: 'delete', withLoader: false });

  const stateListObj = (item: any) => ({
    id: item.id,
    code: item.id,
    name: item.name,
    isStartingState: item.isStartingStage,
    isEndingState: item.isEndingStage,
    task: item.task,
    order: item.order,
  });

  const getStatesListById = async (id: number) => {
    try {
      actions?.showLoader(true);

      const response = await getStateListById({
        queryString: {
          fields: 'procedureId',
          search: String(id),
        },
      });
      const stateList = response.data.map(stateListObj);

      dispatch(reducerActions.setStateList(stateList));
      return {
        success: response.succeeded,
      };
    } catch (error) {
      dispatch(reducerActions.setStateList([]));
      return {
        success: false,
      };
    } finally {
      actions?.showLoader(false);
    }
  };

  const getStateCatalogs = async (): Promise<void> => {
    try {
      actions?.showLoader(true);
      const tasks = await getTasks();
      const woTypes = await getWoTypes({
        queryString: {
          type: 'OT',
        },
      });
      const states = await getStates();
      const reports = await getReports();

      const setWoTypes = woTypes.data.map((item: any) => ({
        id: item.id,
        name: item.shortName,
        description: item.description,
      }));

      dispatch(reducerActions.setCatalogTasks(tasks.data));
      dispatch(reducerActions.setCatalogWoTypes(setWoTypes));
      dispatch(reducerActions.setCatalogStates(states.data));
      dispatch(reducerActions.setCatalogReports(reports.data));
    } catch (error) {
      dispatch(reducerActions.setCatalogTasks([]));
    } finally {
      actions?.showLoader(false);
    }
  };

  const createState = async (data: any) => {
    const {
      procedureId,
      isBrigadeRequired,
      isEndingStage,
      isObservationsRequired,
      isReportEmiting,
      isRequiredWorkOrder,
      isStartingStage,
      isWorkOrderCompletionRequired,
      name,
      stateId,
      taskId,
      workOrderId,
      reportId,
    } = data;

    try {
      actions?.showLoader(true);
      const req = await postCreateState({
        body: {
          procedureId,
          stageId: stateId,
          taskId,
          reportId,
          workOrderId,
          isStartingStage,
          isEndingStage,
          isBrigadeRequired,
          isObservationsRequired,
          isReportEmiting,
          isRequiredWorkOrder,
          isWorkOrderCompletionRequired,
          name,
        },
      });

      if (req.succeeded) {
        const response = await getStateListById({
          queryString: {
            fields: 'procedureId',
            search: String(procedureId),
          },
        });
        const stateList = response.data.map(stateListObj);

        dispatch(reducerActions.setStateList(stateList));

        return {
          success: true,
        };
      } else {
        return {
          success: false,
          message: req.message,
        };
      }
    } catch (error) {
      return {
        success: false,
      };
    } finally {
      actions?.showLoader(false);
    }
  };

  const updateState = async (data: any) => {
    const {
      id,
      procedureStage,
      procedureId,
      isBrigadeRequired,
      isEndingStage,
      isObservationsRequired,
      isReportEmiting,
      isRequiredWorkOrder,
      isStartingStage,
      isWorkOrderCompletionRequired,
      name,
      stateId,
      taskId,
      workOrderId,
      reportId,
      order,
    } = data;

    try {
      actions?.showLoader(true);
      const req = await putUpdateState({
        body: {
          id,
          procedureStage,
          name,
          stageId: stateId,
          taskId,
          isStartingStage,
          isEndingStage,
          isBrigadeRequired,
          isObservationsRequired,
          isReportEmiting,
          reportId,
          isRequiredWorkOrder,
          workOrderId,
          isWorkOrderCompletionRequired,
          order,
        },
      });

      if (req.succeeded) {
        const response = await getStateListById({
          queryString: {
            fields: 'procedureId',
            search: String(procedureId),
          },
        });
        const stateList = response.data.map(stateListObj);

        dispatch(reducerActions.setStateList(stateList));

        return {
          success: true,
        };
      } else {
        return {
          success: false,
          message: req.message,
        };
      }
    } catch (error) {
      return {
        success: false,
      };
    } finally {
      actions?.showLoader(false);
    }
  };

  const deleteState = async (id: number) => {
    try {
      actions?.showLoader(true);
      const req = await deleteStateById({
        body: {
          id,
          autoSave: true,
        },
      });

      if (req.succeeded) {
        const response = await getStateListById({
          queryString: {
            fields: 'procedureId',
            search: state.idPaperwork,
          },
        });
        const stateList = response.data.map(stateListObj);

        dispatch(reducerActions.setStateList(stateList));
        return {
          success: true,
        };
      }
      return {
        success: false,
      };
    } catch (error) {
      return {
        success: false,
      };
    } finally {
      actions?.showLoader(false);
    }
  };

  const isWOType = () => {
    const { idPaperwork, paperworksList, catalogPaperworkTypes } = state;
    const paperworkSelected = paperworksList.find((item: any) => item.id === idPaperwork);
    const type = catalogPaperworkTypes.find((item: any) => item.id === paperworkSelected?.typeId);
    return type?.name === 'OT';
  };

  const getStateDataById = async (id: number) => {
    try {
      actions?.showLoader(true);

      const response = await getStateById({
        urlParams: String(id),
      });
      if (response.succeeded) {
        dispatch(reducerActions.setStateById(response?.data));
        return {
          success: true,
        };
      } else {
        return {
          success: false,
        };
      }
    } catch (error) {
      dispatch(reducerActions.setStateById(state.stateById));
      return {
        success: false,
      };
    } finally {
      actions?.showLoader(false);
    }
  };

  return {
    getStatesListById,
    getStateCatalogs,
    createState,
    updateState,
    isWOType,
    getStateDataById,
    deleteState,
  };
};

export { useStatesActions };
