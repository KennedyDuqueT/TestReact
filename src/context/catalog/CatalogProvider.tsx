import { useState, useEffect, PropsWithChildren, FC, useContext } from 'react';
import { apiRequest } from '@/api';
import { Catalog, CatalogContextProps } from './catalog.types';
import { catalogNames, catalogObj } from './catalog.constants';
import { CatalogContext } from './catalog.context';

interface Props extends PropsWithChildren {}

const CatalogContextProvider: FC<Props> = ({ children }) => {
  const [catalogs, setCatalogs] = useState<CatalogContextProps>(catalogObj);

  const fetchCatalog = async (catalogName: string) => {
    try {
      const response = await apiRequest<Array<Catalog>>('GET', catalogName);
      const catalogKey = catalogName !== 'class' ? catalogName : 'classCat';
      if (response.data !== undefined) {
        setCatalogs((prevCatalogs) => ({
          ...prevCatalogs,
          [catalogKey]: response.data,
        }));
      }
    } catch (error) {
      console.error(`Error fetching ${catalogName}:`, error);
    }
  };

  useEffect(() => {
    catalogNames.forEach((catalogName) => fetchCatalog(catalogName));
  }, []);

  return <CatalogContext.Provider value={catalogs}>{children}</CatalogContext.Provider>;
};

const useCatalogContext = () => useContext(CatalogContext);

export { CatalogContextProvider, useCatalogContext };
