import { FC, PropsWithChildren, useMemo, useReducer } from 'react';
import { useActions } from './lotStatusConfig.actions';
import { LotStatusConfigContext, reducer, initialState } from './lotStatusConfig.context';
import { ContextType } from './lotStatusConfig.types';

type Props = PropsWithChildren;

export const LotStatusConfigProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  const contextValue = useMemo<ContextType>(() => ({ ...state, actions }), [state, actions]);

  return <LotStatusConfigContext.Provider value={contextValue}>{children}</LotStatusConfigContext.Provider>;
};
