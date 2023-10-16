import { FC, PropsWithChildren, useMemo, useReducer } from 'react';
import { useActions } from './invoiceStatusTypeConfig.actions';
import { InvoiceStatusTypeConfigContext, reducer, initialState } from './invoiceStatusTypeConfig.context';
import { ContextType } from './invoiceStatusTypeConfig.types';

type Props = PropsWithChildren;

export const InvoiceStatusTypeConfigProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  const contextValue = useMemo<ContextType>(() => ({ ...state, actions }), [state, actions]);

  return <InvoiceStatusTypeConfigContext.Provider value={contextValue}>{children}</InvoiceStatusTypeConfigContext.Provider>;
};
