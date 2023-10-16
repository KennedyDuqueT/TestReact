import { useContext } from 'react';
import { ReadingImportContext } from './readingImport.context';

export const useReadingImport = () => useContext(ReadingImportContext);
