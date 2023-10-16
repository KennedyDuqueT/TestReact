import { GeneralActions, State } from '../paperworks.types';
import { reducerActions } from '../paperworks.constants';
import { useApi } from '@/hooks';
import { useLoader } from '@/context';

const useGeneralActions = (state: State, dispatch: any): GeneralActions => {
  const { actions } = useLoader();
  const postCreateProcedure = useApi({ endpoint: 'procedure/api/procedurestemplates', method: 'post', withLoader: false });
  const putUpdateProcedure = useApi({ endpoint: 'procedure/api/procedurestemplates', method: 'put' });
  const deleteProcedure = useApi({ endpoint: 'procedure/api/procedurestemplates', method: 'delete' });
  const getProcedureById = useApi({ endpoint: 'procedure/api/procedurestemplates', method: 'get' });
  const getProcedures = useApi({ endpoint: 'procedure/api/procedurestemplates', method: 'get', withLoader: false });

  const createPaperwork = async (data: any) => {
    const { days, description, hours, minutes, priority, requiredUserSupply, typePaperwork, shortName } = data;
    try {
      actions?.showLoader(true);
      const req = await postCreateProcedure({
        body: {
          shortName,
          priorityId: Number(priority),
          procedureTypeId: Number(typePaperwork),
          days: Number(days),
          hours: Number(hours),
          minutes: Number(minutes),
          requiredUserSupply: Number(requiredUserSupply),
          description,
          createdByUserId: 23,
        },
      });

      if (req.succeeded) {
        dispatch(reducerActions.setPaperworkId(req.data.id));
        const procedureList = await getProcedures();

        const paperworksList = procedureList.data.map((item: any) => {
          const typeFound = state.catalogPaperworkTypes.find((cpt: any) => cpt.id === item.procedureTypeId);

          return {
            id: item.id,
            code: item.id,
            type: typeFound?.name,
            shortName: item.shortName,
            description: item.description,
            typeId: item.procedureTypeId,
          };
        });

        dispatch(reducerActions.setPaperworksList(paperworksList));
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

  const updatePaperwork = async (data: any) => {
    const { id, days, description, hours, minutes, priority, requiredUserSupply, typePaperwork, shortName } = data;
    try {
      const req = await putUpdateProcedure({
        body: {
          id,
          shortName,
          priorityId: Number(priority),
          procedureTypeId: Number(typePaperwork),
          days: Number(days),
          hours: Number(hours),
          minutes: Number(minutes),
          requiredUserSupply: Number(requiredUserSupply),
          description,
          createdByUserId: 23,
        },
      });

      return {
        success: req.succeeded,
      };
    } catch (error) {
      return {
        success: false,
      };
    }
  };

  const getEditData = async (id: number) => {
    try {
      const editData = await getProcedureById({
        urlParams: String(id),
      });

      if (editData.succeeded) {
        dispatch(reducerActions.setEditData(editData?.data));
        dispatch(reducerActions.setPaperworkId(id));
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

  const deletePaperwork = async (id: number) => {
    try {
      const req = await deleteProcedure({
        body: {
          id,
          autoSave: true,
          deletedByUserId: 23,
        },
      });

      return {
        success: req.succeeded,
      };
    } catch (error) {
      return {
        success: false,
      };
    }
  };

  return {
    createPaperwork,
    updatePaperwork,
    deletePaperwork,
    getEditData,
  };
};

export { useGeneralActions };
