import { FC, PropsWithChildren, useMemo, useReducer } from 'react';
import { RouteManagementContext, initialState, reducer } from './routesManagement.context';
import { useActions } from './routesManagement.actions';
import { ContextType } from './routesManagement.types';

type Props = PropsWithChildren;

export const RouteManagementProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  const contextValue = useMemo<ContextType>(() => ({ ...state, actions }), [state, actions]);

  return <RouteManagementContext.Provider value={contextValue}>{children}</RouteManagementContext.Provider>;
};
