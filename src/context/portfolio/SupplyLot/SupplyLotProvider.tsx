import { FC, PropsWithChildren, useMemo, useReducer } from 'react';
import { useActions } from './supplyLot.actions';
import { SupplyLotContext, reducer, initialState } from './supplyLot.context';
import { ContextType } from './supplyLot.types';

type Props = PropsWithChildren;

export const SupplyLotProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  const contextValue = useMemo<ContextType>(() => ({ ...state, actions }), [state, actions]);

  return <SupplyLotContext.Provider value={contextValue}>{children}</SupplyLotContext.Provider>;
};
