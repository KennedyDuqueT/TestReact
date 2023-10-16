import { useContext } from 'react';
import { GenerateBillingArchiveContext } from './generateBillingArchive.context';

export const useGenerateBillingArchive = () => useContext(GenerateBillingArchiveContext);
