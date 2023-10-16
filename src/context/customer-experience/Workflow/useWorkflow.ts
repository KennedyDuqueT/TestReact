import { useContext } from 'react';
import { WorkflowContext } from './workflow.context';

export const useWorkflow = () => useContext(WorkflowContext);
