import { FC, PropsWithChildren, useMemo, useReducer } from 'react';
import { useActions } from './supplyRequest.actions';
import { SupplyRequestContext, reducer, initialState } from './supplyRequest.context';
import { ContextType } from './supplyRequest.types';

type Props = PropsWithChildren;

export const SupplyRequestProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  const contextValue = useMemo<ContextType>(() => ({ ...state, actions }), [state, actions]);

  return <SupplyRequestContext.Provider value={contextValue}>{children}</SupplyRequestContext.Provider>;
};
