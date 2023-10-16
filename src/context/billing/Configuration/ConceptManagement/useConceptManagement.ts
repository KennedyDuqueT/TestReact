import { useContext } from 'react';
import { ConceptManagementContext } from './conceptManagement.context';

export const useConceptManagement = () => useContext(ConceptManagementContext);
