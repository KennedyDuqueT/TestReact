import { FC, PropsWithChildren, useMemo, useReducer } from 'react';
import { TariffSchedulesManagementContext, initialState, reducer } from './tariffSchedulesManagement.context';
import { useActions } from './tariffSchedulesManagement.actions';
import { ContextType } from './tariffSchedulesManagement.types';

type Props = PropsWithChildren;

export const TariffSchedulesManagementProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  const contextValue = useMemo<ContextType>(() => ({ ...state, actions }), [state, actions]);

  return <TariffSchedulesManagementContext.Provider value={contextValue}>{children}</TariffSchedulesManagementContext.Provider>;
};
