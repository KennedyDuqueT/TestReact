import { useContext } from 'react';
import { PartialOperationContext } from './partialOperation.context';

export const usePartialOperation = () => useContext(PartialOperationContext);
