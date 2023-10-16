import { FC, PropsWithChildren, useMemo, useReducer } from 'react';
import { RateManagementContext, initialState, reducer } from './ratesManagement.context';
import { useActions } from './ratesManagement.actions';
import { ContextType } from './ratesManagement.types';

type Props = PropsWithChildren;

export const RateManagementProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  const contextValue = useMemo<ContextType>(() => ({ ...state, actions }), [state, actions]);

  return <RateManagementContext.Provider value={contextValue}>{children}</RateManagementContext.Provider>;
};
