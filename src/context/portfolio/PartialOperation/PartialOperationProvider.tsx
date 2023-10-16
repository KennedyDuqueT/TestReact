import { FC, PropsWithChildren, useMemo, useReducer } from 'react';
import { useActions } from './partialOperation.actions';
import { PartialOperationContext, reducer, initialState } from './partialOperation.context';
import { ContextType } from './partialOperation.types';

type Props = PropsWithChildren;

export const PartialOperationProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  const contextValue = useMemo<ContextType>(() => ({ ...state, actions }), [state, actions]);

  return <PartialOperationContext.Provider value={contextValue}>{children}</PartialOperationContext.Provider>;
};
