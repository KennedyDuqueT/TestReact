import { FC, PropsWithChildren, useEffect, useMemo, useReducer } from 'react';
import Cookies from 'js-cookie';
import { UIContext, reducer, initialState } from './ui.context';
import { useActions } from './ui.actions';
import { ContextType } from './ui.types';

type Props = PropsWithChildren;

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  useEffect(() => {
    const sideBarIsOpenInCookies = Cookies.get('sideBarIsOpen') === 'true';
    if (!sideBarIsOpenInCookies) actions.toggleSideBar();
  }, []);

  const contextValue = useMemo<ContextType>(() => ({ ...state, actions }), [state, actions]);

  return <UIContext.Provider value={contextValue}>{children}</UIContext.Provider>;
};
