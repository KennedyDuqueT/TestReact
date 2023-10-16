import { FC, PropsWithChildren, useMemo, useReducer } from 'react';
import { useActions } from './posProviderConfig.actions';
import { PosProviderConfigContext, reducer, initialState } from './posProviderConfig.context';
import { ContextType } from './posProviderConfig.types';

type Props = PropsWithChildren;

export const PosProviderConfigProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  const contextValue = useMemo<ContextType>(() => ({ ...state, actions }), [state, actions]);

  return <PosProviderConfigContext.Provider value={contextValue}>{children}</PosProviderConfigContext.Provider>;
};
