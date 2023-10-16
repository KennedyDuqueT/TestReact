import { FC, PropsWithChildren, useMemo, useReducer } from 'react';
import { useActions } from './paymentDealTypeConfig.actions';
import { PaymentDealTypeConfigContext, reducer, initialState } from './paymentDealTypeConfig.context';
import { ContextType } from './paymentDealTypeConfig.types';

type Props = PropsWithChildren;

export const PaymentDealTypeConfigProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  const contextValue = useMemo<ContextType>(() => ({ ...state, actions }), [state, actions]);

  return <PaymentDealTypeConfigContext.Provider value={contextValue}>{children}</PaymentDealTypeConfigContext.Provider>;
};
