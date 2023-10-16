import { FC, PropsWithChildren, useMemo, useReducer } from 'react';
import { useActions } from './cashRegisterStatusConfig.actions';
import { CashRegisterStatusConfigContext, reducer, initialState } from './cashRegisterStatusConfig.context';
import { ContextType } from './cashRegisterStatusConfig.types';

type Props = PropsWithChildren;

export const CashRegisterStatusConfigProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  const contextValue = useMemo<ContextType>(() => ({ ...state, actions }), [state, actions]);

  return <CashRegisterStatusConfigContext.Provider value={contextValue}>{children}</CashRegisterStatusConfigContext.Provider>;
};
