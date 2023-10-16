import { createAction } from '@/utils';
import { WorkflowSection, Steps } from '@/models/customer-experience';

export enum Types {
  SET_PAPERWORKS_LIST = 'workflow/setPaperworksList',
  SET_WORKFLOW_TITLE = 'workflow/setWorkflowTitle',
  SET_WORKFLOW_STEPS = 'workflow/setWorkflowSteps',
}

export const reducerActions = {
  setPaperworksList: createAction<Types, WorkflowSection[]>(Types.SET_PAPERWORKS_LIST),
  setWorkflowTitle: createAction<Types, string>(Types.SET_WORKFLOW_TITLE),
  setWorkflowSteps: createAction<Types, Steps[]>(Types.SET_WORKFLOW_STEPS),
};
