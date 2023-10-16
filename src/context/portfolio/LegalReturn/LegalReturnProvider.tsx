import { FC, PropsWithChildren, useMemo, useReducer } from 'react';
import { useActions } from './legalReturn.actions';
import { LegalReturnContext, reducer, initialState } from './legalReturn.context';
import { ContextType } from './legalReturn.types';

type Props = PropsWithChildren;

export const LegalReturnProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  const contextValue = useMemo<ContextType>(() => ({ ...state, actions }), [state, actions]);

  return <LegalReturnContext.Provider value={contextValue}>{children}</LegalReturnContext.Provider>;
};
