import { Context, createContext } from 'react';
import { lightTheme } from '@/themes';
import { Action } from '@/utils';
import { State, ContextType } from './theme.types';
import { Types } from './theme.constants';

export const initialState: State = {
  theme: 'light',
  currentTheme: lightTheme,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Types.SET_CURRENT_THEME:
      return { ...state, theme: action.payload.theme, currentTheme: action.payload.currentTheme };
    default:
      return state;
  }
};

export const ThemeContext: Context<ContextType> = createContext(initialState);
