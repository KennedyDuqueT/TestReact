import { FC, PropsWithChildren, useMemo, useReducer } from 'react';
import { useActions } from './cashRegisterConfig.actions';
import { CashRegisterConfigContext, reducer, initialState } from './cashRegisterConfig.context';
import { ContextType } from './cashRegisterConfig.types';

type Props = PropsWithChildren;

export const CashRegisterConfigProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  const contextValue = useMemo<ContextType>(() => ({ ...state, actions }), [state, actions]);

  return <CashRegisterConfigContext.Provider value={contextValue}>{children}</CashRegisterConfigContext.Provider>;
};
