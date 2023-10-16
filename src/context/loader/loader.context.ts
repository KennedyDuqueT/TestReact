import { Context, createContext } from 'react';
import { Action } from '@/utils';
import { State, ContextType } from './loader.types';
import { Types } from './loader.constants';

export const initialState: State = {
  isLoading: false,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Types.SET_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export const LoaderContext: Context<ContextType> = createContext(initialState);
