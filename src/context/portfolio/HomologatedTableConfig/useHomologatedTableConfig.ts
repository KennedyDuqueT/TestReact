import { useContext } from 'react';
import { HomologatedTableConfigContext } from './homologatedTableConfig.context';

export const useHomologatedTableConfig = () => useContext(HomologatedTableConfigContext);
