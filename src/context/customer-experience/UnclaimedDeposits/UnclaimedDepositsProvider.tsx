import { FC, PropsWithChildren, useMemo, useReducer } from 'react';
import { useActions } from './unclaimedDeposits.actions';
import { UnclaimedDepositsContext, reducer, initialState } from './unclaimedDeposits.context';
import { ContextType } from './unclaimedDeposits.types';

type Props = PropsWithChildren;

export const UnclaimedDepositsProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  const contextValue = useMemo<ContextType>(() => ({ ...state, actions }), [state, actions]);

  return <UnclaimedDepositsContext.Provider value={contextValue}>{children}</UnclaimedDepositsContext.Provider>;
};
