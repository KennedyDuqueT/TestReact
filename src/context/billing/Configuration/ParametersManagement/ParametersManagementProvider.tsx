import { FC, PropsWithChildren, useMemo } from 'react';
import { ParameterManagementContext } from './parametersManagement.context';
import { useActions } from './parametersManagement.actions';
import { ContextType } from './parametersManagement.types';

type Props = PropsWithChildren;

export const ParameterManagementProvider: FC<Props> = ({ children }) => {
  const actions = useActions();

  const contextValue = useMemo<ContextType>(() => ({ ...{}, actions }), [{}, actions]);

  return <ParameterManagementContext.Provider value={contextValue}>{children}</ParameterManagementContext.Provider>;
};
