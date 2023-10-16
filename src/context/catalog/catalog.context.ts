import { Context, createContext } from 'react';
import { CatalogContextProps } from './catalog.types';
import { catalogObj } from './catalog.constants';

export const CatalogContext: Context<CatalogContextProps> = createContext<CatalogContextProps>(catalogObj);
