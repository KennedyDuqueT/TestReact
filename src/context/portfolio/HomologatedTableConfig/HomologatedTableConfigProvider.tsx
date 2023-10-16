import { FC, PropsWithChildren, useMemo, useReducer } from 'react';
import { useActions } from './homologatedTableConfig.actions';
import { HomologatedTableConfigContext, reducer, initialState } from './homologatedTableConfig.context';
import { ContextType } from './homologatedTableConfig.types';

type Props = PropsWithChildren;

export const HomologatedTableConfigProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  const contextValue = useMemo<ContextType>(() => ({ ...state, actions }), [state, actions]);

  return <HomologatedTableConfigContext.Provider value={contextValue}>{children}</HomologatedTableConfigContext.Provider>;
};
