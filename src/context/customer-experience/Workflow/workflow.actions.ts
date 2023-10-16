import { Actions, State } from './workflow.types';
import { reducerActions } from './workflow.constants';
import { useLoader } from '@/context';
import { useApi } from '@/hooks';
import { Item, WorkflowSection, ResponseObj } from '@/models/customer-experience';
import { useTranslation } from '@/hooks';
import { ENDPOINTS } from '@/api/endpoints';

type ComponentKeys = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

const useActions = (state: State, dispatch: any): Actions => {
  const { actions } = useLoader();
  const { t } = useTranslation();
  const getProcedures = useApi({ endpoint: ENDPOINTS.procedureTemplates, method: 'get', withLoader: false });

  const getPaperworksList = async (): Promise<void> => {
    try {
      actions?.showLoader(true);
      const response = await getProcedures();

      const getTitle: Record<number, string> = {
        1: t('workflow.paperworkCategories.wo'),
        2: t('workflow.paperworkCategories.claim'),
        3: t('workflow.paperworkCategories.services'),
      };

      const grouped: Record<string, Item[]> = response.data.reduce((acc: any, item: any) => {
        const title = getTitle[item.procedureTypeId];
        if (!acc[title]) {
          acc[title] = [];
        }
        acc[title].push({
          id: item.id,
          title: item.shortName,
        });
        return acc;
      }, {});

      const result: WorkflowSection[] = Object.entries(grouped).map(([key, value]) => {
        return {
          title: key,
          items: value,
        };
      });

      dispatch(reducerActions.setPaperworksList(result));
    } catch (error) {
      dispatch(reducerActions.setPaperworksList([]));
    } finally {
      actions?.showLoader(false);
    }
  };

  const getWorkflow = async (id: number, title: string): Promise<ResponseObj> => {
    try {
      actions?.showLoader(true);

      dispatch(reducerActions.setWorkflowTitle(title));

      const response = await getProcedures({
        urlParams: String(id),
      });

      const components: Record<ComponentKeys, { component: string }> = {
        1: {
          component: 'ChangeContractPage',
        },
        2: {
          component: 'ChangeOwnershipPage',
        },
        3: {
          component: 'ClientValidationPage',
        },
        4: {
          component: 'ContactReportPage',
        },
        5: {
          component: 'CreateSupplyPage',
        },
        6: {
          component: 'CreditRatingPage',
        },
        7: {
          component: 'PaymentAgreementPage',
        },
        8: {
          component: 'TransferBailPage',
        },
        9: {
          component: 'ValidateDocsPage',
        },
      };

      if (response.succeeded) {
        const steps = response.data.procedureStages.map((item: any) => {
          const eventId: ComponentKeys = item.task.event.id;
          return {
            step: item.order,
            componentName: components[eventId].component,
            stepName: item.name,
          };
        });

        dispatch(reducerActions.setWorkflowSteps(steps));
      }

      return {
        success: response.succeeded,
      };
    } catch (error) {
      dispatch(reducerActions.setWorkflowTitle(''));
      dispatch(reducerActions.setWorkflowSteps([]));
      return {
        success: false,
      };
    } finally {
      actions?.showLoader(false);
    }
  };

  return {
    getPaperworksList,
    getWorkflow,
  };
};

export { useActions };
