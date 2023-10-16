import { FC, PropsWithChildren, useMemo, useReducer } from 'react';
import { useActions } from './invoiceInitialAmount.actions';
import { InvoiceInitialAmountContext, reducer, initialState } from './invoiceInitalAmount.context';
import { ContextType } from './invoiceInitialAmount.types';

type Props = PropsWithChildren;

export const InvoiceInitalAmountProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  const contextValue = useMemo<ContextType>(() => ({ ...state, actions }), [state, actions]);

  return <InvoiceInitialAmountContext.Provider value={contextValue}>{children}</InvoiceInitialAmountContext.Provider>;
};
