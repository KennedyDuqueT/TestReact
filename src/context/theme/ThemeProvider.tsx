import { FC, PropsWithChildren, useEffect, useMemo, useReducer } from 'react';
import Cookies from 'js-cookie';
import { CssBaseline, Theme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { useActions } from './theme.actions';
import { ThemeContext, reducer, initialState } from './theme.context';
import { ContextType } from './theme.types';

export interface ThemeState {
  theme: string;
  currentTheme: Theme;
}

type Props = PropsWithChildren;

export const ThemeProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  useEffect(() => {
    actions.onSelectTheme(Cookies.get('theme') || 'light');
  }, []);

  const contextValue = useMemo<ContextType>(() => ({ ...state, actions }), [state, actions]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={state.currentTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
