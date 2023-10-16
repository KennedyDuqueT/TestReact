import { FC, PropsWithChildren, useMemo, useReducer } from 'react';
import { ElectronicBillStampingContext, initialState, reducer } from './electronicBillStamping.context';
import { useActions } from './electronicBillStamping.actions';
import { ContextType } from './electronicBillStamping.types';

type Props = PropsWithChildren;

export const ElectronicBillStampingProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  const contextValue = useMemo<ContextType>(() => ({ ...state, actions }), [state, actions]);

  return <ElectronicBillStampingContext.Provider value={contextValue}>{children}</ElectronicBillStampingContext.Provider>;
};
