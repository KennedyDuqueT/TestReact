import { SectorsActions, State } from '../paperworks.types';
import { reducerActions } from '../paperworks.constants';
import { useApi } from '@/hooks';
import { useLoader } from '@/context';
import { ENDPOINTS } from '@/api/endpoints';

const useSectorsActions = (state: State, dispatch: any): SectorsActions => {
  const { actions } = useLoader();
  const getDepartmentsListById = useApi({ endpoint: ENDPOINTS.procedureDepartments, method: 'get', withLoader: false });
  const getDepartments = useApi({ endpoint: ENDPOINTS.catalogDepartments, method: 'get', withLoader: false });
  const getStateListById = useApi({ endpoint: ENDPOINTS.procedureStages, method: 'get', withLoader: false });
  const postCreateDepartment = useApi({ endpoint: ENDPOINTS.procedureDepartments, method: 'post', withLoader: false });
  const putUpedateDepartment = useApi({ endpoint: ENDPOINTS.procedureDepartments, method: 'put', withLoader: false });
  const deleteDepartmentById = useApi({ endpoint: ENDPOINTS.procedureDepartments, method: 'delete', withLoader: false });
  const getEditDataDepartment = useApi({ endpoint: ENDPOINTS.procedureDepartments, method: 'get' });

  const stateListObj = (item: any) => ({
    id: item.id,
    code: item.id,
    name: item.name,
    isStartingState: item.isStartingStage,
    isEndingState: item.isEndingStage,
    task: item.task,
    order: item.order,
  });

  const getCatalogs = async (): Promise<void> => {
    try {
      actions?.showLoader(true);

      const departments = await getDepartments();
      const states = await getStateListById({
        queryString: {
          fields: 'procedureId',
          search: state.idPaperwork,
        },
      });
      const stateList = states.data.map(stateListObj);

      dispatch(reducerActions.setStateList(stateList));
      dispatch(reducerActions.setCatalogSectors(departments.data));
    } catch (error) {
      dispatch(reducerActions.setCatalogSectors([]));
    } finally {
      actions?.showLoader(false);
    }
  };

  const getSectorsList = async (): Promise<void> => {
    try {
      actions?.showLoader(true);

      const response = await getDepartmentsListById({
        queryString: {
          fields: 'procedureId',
          search: state.idPaperwork,
        },
      });
      const allowedToGenerate = response.data
        .filter((item: any) => item.isCreationAllowed)
        .map((item: any) => ({
          id: item.id,
          code: item.id,
          description: item.description,
          isCreationAllowed: item.isCreationAllowed,
        }));

      const allowedToSee = response.data
        .filter((item: any) => item.isVisibilityAllowed)
        .map((item: any) => ({
          id: item.id,
          code: item.id,
          update: item.update,
          description: item.description,
          isVisibilityAllowed: item.isVisibilityAllowed,
        }));

      dispatch(reducerActions.setSectorsAllowedToGenerateList(allowedToGenerate));
      dispatch(reducerActions.setSectorsAllowedToSeeList(allowedToSee));
    } catch (error) {
      dispatch(reducerActions.setSectorsAllowedToGenerateList([]));
      dispatch(reducerActions.setSectorsAllowedToSeeList([]));
    } finally {
      actions?.showLoader(false);
    }
  };

  const createSector = async (data: any) => {
    const { description, isCreationAllowed, isVisibilityAllowed, name, sectorCode, stages, update } = data;

    try {
      actions?.showLoader(true);
      const req = await postCreateDepartment({
        body: {
          procedureId: state.idPaperwork,
          departmentId: sectorCode,
          isCreationAllowed,
          isVisibilityAllowed,
          description,
          update,
          stages,
          name,
        },
      });

      if (req.succeeded) {
        await getSectorsList();
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

  const updateSector = async (data: any) => {
    const { id, description, isCreationAllowed, isVisibilityAllowed, name, sectorCode, stages, update } = data;

    try {
      actions?.showLoader(true);
      const req = await putUpedateDepartment({
        body: {
          id,
          procedureId: state.idPaperwork,
          departmentId: sectorCode,
          isCreationAllowed,
          isVisibilityAllowed,
          description,
          update,
          stages,
          name,
        },
      });

      if (req.succeeded) {
        await getSectorsList();
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

  const getEditData = async (id: number) => {
    try {
      const editData = await getEditDataDepartment({
        urlParams: String(id),
      });

      if (editData.succeeded) {
        dispatch(reducerActions.setSectorEditData(editData?.data));
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

  const deleteSector = async (id: number) => {
    try {
      actions?.showLoader(true);
      const req = await deleteDepartmentById({
        body: {
          id,
          autoSave: true,
          deletedByUserId: 23,
        },
      });

      if (req.succeeded) {
        await getSectorsList();
      }
      return {
        success: req.succeeded,
      };
    } catch (error) {
      return {
        success: false,
      };
    } finally {
      actions?.showLoader(false);
    }
  };

  return {
    getCatalogs,
    getSectorsList,
    createSector,
    updateSector,
    deleteSector,
    getEditData,
  };
};

export { useSectorsActions };
