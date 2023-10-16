import { FC, PropsWithChildren, useMemo, useReducer } from 'react';
import { useActions } from './approvedTable.actions';
import { ApprovedTableRequestContext, reducer, initialState } from './approvedTable.context';
import { ContextType } from './approvedTable.types';

type Props = PropsWithChildren;

export const ApprovedTableProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  const contextValue = useMemo<ContextType>(() => ({ ...state, actions }), [state, actions]);

  return <ApprovedTableRequestContext.Provider value={contextValue}>{children}</ApprovedTableRequestContext.Provider>;
};
