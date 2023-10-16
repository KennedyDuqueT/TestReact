import { FC, PropsWithChildren, useMemo, useReducer } from 'react';
import { useActions } from './notificationConfig.actions';
import { NotificationConfigContext, reducer, initialState } from './notificationConfig.context';
import { ContextType } from './notificationConfig.types';

type Props = PropsWithChildren;

export const NotificationConfigProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  const contextValue = useMemo<ContextType>(() => ({ ...state, actions }), [state, actions]);

  return <NotificationConfigContext.Provider value={contextValue}>{children}</NotificationConfigContext.Provider>;
};
