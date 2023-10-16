import { Context, createContext } from 'react';
import { Action } from '@/utils';
import { State, ContextType } from './workflow.types';
import { Types } from './workflow.constants';

export const initialState: State = {
  paperworkSection: [],
  workflowTitle: '',
  workflowSteps: [],
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Types.SET_PAPERWORKS_LIST:
      return { ...state, paperworkSection: action.payload };
    case Types.SET_WORKFLOW_TITLE:
      return { ...state, workflowTitle: action.payload };
    case Types.SET_WORKFLOW_STEPS:
      return { ...state, workflowSteps: action.payload };
    default:
      return state;
  }
};

export const WorkflowContext: Context<ContextType> = createContext(initialState);
