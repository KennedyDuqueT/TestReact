import { FC, PropsWithChildren, useMemo, useReducer } from 'react';
import { ReadingImportContext, initialState, reducer } from './readingImport.context';
import { useActions } from './readingImport.actions';
import { ContextType } from './readingImport.types';

type Props = PropsWithChildren;

export const ReadingImportProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  const contextValue = useMemo<ContextType>(() => ({ ...state, actions }), [state, actions]);

  return <ReadingImportContext.Provider value={contextValue}>{children}</ReadingImportContext.Provider>;
};
