import { FC, PropsWithChildren, useMemo, useReducer } from 'react';
import { useActions } from './loader.actions';
import { LoaderContext, reducer, initialState } from './loader.context';
import { ContextType } from './loader.types';

type Props = PropsWithChildren;

export const LoaderProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  const contextValue = useMemo<ContextType>(() => ({ ...state, actions }), [state, actions]);

  return <LoaderContext.Provider value={contextValue}>{children}</LoaderContext.Provider>;
};
