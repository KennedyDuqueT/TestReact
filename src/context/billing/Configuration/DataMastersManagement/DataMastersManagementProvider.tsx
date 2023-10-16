import { FC, PropsWithChildren, useMemo, useReducer } from 'react';
import { DataMastersManagementContext, initialState, reducer } from './dataMastersManagement.context';
import { useActions } from './dataMastersManagement.actions';
import { ContextType } from './dataMastersManagement.types';

type Props = PropsWithChildren;

export const DataMastersManagementProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  const contextValue = useMemo<ContextType>(() => ({ ...state, actions }), [state, actions]);

  return <DataMastersManagementContext.Provider value={contextValue}>{children}</DataMastersManagementContext.Provider>;
};
