import { useContext } from 'react';
import { LegalReturnContext } from './legalReturn.context';

export const useLegalReturn = () => useContext(LegalReturnContext);
