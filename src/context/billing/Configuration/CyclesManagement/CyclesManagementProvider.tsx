import { FC, PropsWithChildren, useMemo } from 'react';
import { CycleManagementContext } from './cyclesManagement.context';
import { useActions } from './cyclesManagement.actions';
import { ContextType } from './cyclesManagement.types';

type Props = PropsWithChildren;

export const CycleManagementProvider: FC<Props> = ({ children }) => {
  const actions = useActions();

  const contextValue = useMemo<ContextType>(() => ({ ...{}, actions }), [{}, actions]);

  return <CycleManagementContext.Provider value={contextValue}>{children}</CycleManagementContext.Provider>;
};
