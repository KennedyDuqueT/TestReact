import { FC, PropsWithChildren, useMemo, useReducer } from 'react';
import { CriticalReadingContext, initialState, reducer } from './criticalReading.context';
import { useActions } from './criticalReading.actions';
import { ContextType } from './criticalReading.types';

type Props = PropsWithChildren;

export const CriticalReadingProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  const contextValue = useMemo<ContextType>(() => ({ ...state, actions }), [state, actions]);

  return <CriticalReadingContext.Provider value={contextValue}>{children}</CriticalReadingContext.Provider>;
};
