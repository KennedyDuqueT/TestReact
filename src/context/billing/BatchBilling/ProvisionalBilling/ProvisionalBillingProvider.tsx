import { FC, PropsWithChildren, useMemo, useReducer } from 'react';
import { ProvisionalBillingContext, initialState, reducer } from './provisionalBilling.context';
import { useActions } from './provisionalBilling.actions';
import { ContextType } from './provisionalBilling.types';

type Props = PropsWithChildren;

export const ProvisionalBillingProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  const contextValue = useMemo<ContextType>(() => ({ ...state, actions }), [state, actions]);

  return <ProvisionalBillingContext.Provider value={contextValue}>{children}</ProvisionalBillingContext.Provider>;
};
