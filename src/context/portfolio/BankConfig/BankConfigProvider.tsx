import { FC, PropsWithChildren, useMemo, useReducer } from 'react';
import { useActions } from './bankConfig.actions';
import { BankConfigContext, reducer, initialState } from './bankConfig.context';
import { ContextType } from './bankConfig.types';

type Props = PropsWithChildren;

export const BankConfigProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  const contextValue = useMemo<ContextType>(() => ({ ...state, actions }), [state, actions]);

  return <BankConfigContext.Provider value={contextValue}>{children}</BankConfigContext.Provider>;
};
