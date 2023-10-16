import { ContextType } from './parametersManagement.types';
import { Context, createContext } from 'react';

export const ParameterManagementContext: Context<ContextType> = createContext({});
