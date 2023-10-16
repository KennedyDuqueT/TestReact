import { Context, createContext } from 'react';
import { Action } from '@/utils';
import { State, ContextType } from './ui.types';
import { Types } from './ui.constants';

export const initialState: State = {
  sideBarIsOpen: true,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Types.SET_SIDE_BAR_IS_OPEN:
      return { ...state, sideBarIsOpen: action.payload };
    default:
      return state;
  }
};

export const UIContext: Context<ContextType> = createContext(initialState);
