import { FC, PropsWithChildren, useMemo, useReducer } from 'react';
import { useActions } from './changeOfOwnershipUploadDocuments.actions';
import { ChangeOfOwnershipUploadDocumentsContext, reducer, initialState } from './changeOfOwnershipUploadDocuments.context';
import { ContextType } from './changeOfOwnershipUploadDocuments.types';

type Props = PropsWithChildren;

export const ChangeOfOwnershipUploadDocumentsProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  const contextValue = useMemo<ContextType>(() => ({ ...state, actions }), [state, actions]);

  return <ChangeOfOwnershipUploadDocumentsContext.Provider value={contextValue}>{children}</ChangeOfOwnershipUploadDocumentsContext.Provider>;
};
