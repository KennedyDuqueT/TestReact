import { FC, PropsWithChildren, useMemo, useReducer } from 'react';
import { IndividualBillingContext, initialState, reducer } from './individualBilling.context';
import { useActions } from './individualBilling.actions';
import { ContextType } from './individualBilling.types';

type Props = PropsWithChildren;

export const IndividualBillingProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  const contextValue = useMemo<ContextType>(() => ({ ...state, actions }), [state, actions]);

  return <IndividualBillingContext.Provider value={contextValue}>{children}</IndividualBillingContext.Provider>;
};
