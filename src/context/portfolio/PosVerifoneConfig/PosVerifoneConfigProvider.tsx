import { FC, PropsWithChildren, useMemo, useReducer } from 'react';
import { useActions } from './posVerifoneConfig.actions';
import { PosVerifoneConfigContext, reducer, initialState } from './posVerifoneConfig.context';
import { ContextType } from './posVerifoneConfig.types';

type Props = PropsWithChildren;

export const PosVerifoneConfigProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  const contextValue = useMemo<ContextType>(() => ({ ...state, actions }), [state, actions]);

  return <PosVerifoneConfigContext.Provider value={contextValue}>{children}</PosVerifoneConfigContext.Provider>;
};
