import { FC, PropsWithChildren, useMemo, useReducer } from 'react';
import { GenerateBillingArchiveContext, initialState, reducer } from './generateBillingArchive.context';
import { useActions } from './generateBillingArchive.actions';
import { ContextType } from './generateBillingArchive.types';

type Props = PropsWithChildren;

export const GenerateBillingArchiveProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  const contextValue = useMemo<ContextType>(() => ({ ...state, actions }), [state, actions]);

  return <GenerateBillingArchiveContext.Provider value={contextValue}>{children}</GenerateBillingArchiveContext.Provider>;
};
