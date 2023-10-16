import { useContext } from 'react';
import { ApprovedTableRequestContext } from './approvedTable.context';

export const useApprovedTable = () => useContext(ApprovedTableRequestContext);
