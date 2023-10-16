import { ContextType } from './cyclesManagement.types';
import { Context, createContext } from 'react';

export const CycleManagementContext: Context<ContextType> = createContext({});
