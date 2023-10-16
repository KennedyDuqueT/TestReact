import { FC, PropsWithChildren, useMemo, useReducer } from 'react';
import { useActions } from './workflow.actions';
import { WorkflowContext, reducer, initialState } from './workflow.context';
import { ContextType } from './workflow.types';

type Props = PropsWithChildren;

export const WorkflowProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  const contextValue = useMemo<ContextType>(() => ({ ...state, actions }), [state, actions]);

  return <WorkflowContext.Provider value={contextValue}>{children}</WorkflowContext.Provider>;
};
