import { FC, PropsWithChildren, useMemo, useReducer } from 'react';
import { ConceptManagementContext, initialState, reducer } from './conceptManagement.context';
import { useActions } from './conceptManagement.actions';
import { ContextType } from './conceptManagement.types';

type Props = PropsWithChildren;

export const ConceptManagementProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  const contextValue = useMemo<ContextType>(() => ({ ...state, actions }), [state, actions]);

  return <ConceptManagementContext.Provider value={contextValue}>{children}</ConceptManagementContext.Provider>;
};
