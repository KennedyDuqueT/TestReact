import { FC, PropsWithChildren, useMemo, useReducer } from 'react';
import { useActions } from './supplyStatusConfig.actions';
import { SupplyStatusConfigContext, reducer, initialState } from './supplyStatusConfig.context';
import { ContextType } from './supplyStatusConfig.types';

type Props = PropsWithChildren;

export const SupplyStatusConfigProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  const contextValue = useMemo<ContextType>(() => ({ ...state, actions }), [state, actions]);

  return <SupplyStatusConfigContext.Provider value={contextValue}>{children}</SupplyStatusConfigContext.Provider>;
};
