import { useContext } from 'react';
import { CriticalReadingContext } from './criticalReading.context';

export const useCriticalReading = () => useContext(CriticalReadingContext);
