import { Context, createContext } from 'react';
import { Action } from '@/utils';
import { State, ContextType } from './legalReturn.types';
import { Types } from './legalReturn.constants';

export const initialState: State = {
  fileUploaded: false,
  fileName: '',
  processedSupplies: [],
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Types.SET_PROCESSED_SUPPLIES:
      return { ...state, processedSupplies: [...action.payload] };

    default:
      return state;
  }
};

export const LegalReturnContext: Context<ContextType> = createContext(initialState);
