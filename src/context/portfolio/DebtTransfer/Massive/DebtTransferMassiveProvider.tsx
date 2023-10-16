import { FC, PropsWithChildren, useEffect, useMemo, useReducer } from 'react';
import { useActions } from './debtTransferMassive.actions';
import { DebtTransferMassiveContext, reducer, initialState } from './debtTransferMassive.context';
import { ContextType } from './debtTransferMassive.types';

type Props = PropsWithChildren;

export const DebtTransferMassiveProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  useEffect(() => {
    actions.getAllSupplyPairs();
  }, [state.selectedSupplyLotId]);

  const contextValue = useMemo<ContextType>(() => ({ ...state, actions }), [state, actions]);

  return <DebtTransferMassiveContext.Provider value={contextValue}>{children}</DebtTransferMassiveContext.Provider>;
};
