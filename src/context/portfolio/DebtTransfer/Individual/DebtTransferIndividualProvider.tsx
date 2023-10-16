import { FC, PropsWithChildren, useMemo, useReducer } from 'react';
import { useActions } from './debtTransferIndividual.actions';
import { DebtTransferIndividualContext, reducer, initialState } from './debtTransferIndividual.context';
import { ContextType } from './debtTransferIndividual.types';

type Props = PropsWithChildren;

export const DebtTransferIndividualProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  const contextValue = useMemo<ContextType>(() => ({ ...state, actions }), [state, actions]);

  return <DebtTransferIndividualContext.Provider value={contextValue}>{children}</DebtTransferIndividualContext.Provider>;
};
