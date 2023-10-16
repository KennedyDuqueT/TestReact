import { WorkflowSection, ResponseObj, Steps } from '@/models/customer-experience';

export interface State {
  paperworkSection: WorkflowSection[];
  workflowTitle: string;
  workflowSteps: Steps[];
}

export interface Actions {
  getPaperworksList: () => Promise<void>;
  getWorkflow: (id: number, title: string) => Promise<ResponseObj>;
}

export interface ContextType extends State {
  actions?: Actions;
}
