import { Context, createContext } from 'react';
import { Action } from '@/utils';
import { State, ContextType } from './unclaimedDeposits.types';
import { Types } from './unclaimedDeposits.constants';

export const initialState: State = {
  searchResults: [],
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Types.SET_SEARCH_RESULTS:
      return { ...state, searchResults: [...action.payload] };
    default:
      return state;
  }
};

export const UnclaimedDepositsContext: Context<ContextType> = createContext(initialState);
