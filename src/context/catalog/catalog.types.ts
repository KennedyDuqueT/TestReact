export type Catalog = {
  id: number;
  name: string;
};

export type CatalogContextProps = {
  brand: Catalog[];
  classCat: Catalog[];
  manufacturer: Catalog[];
  model: Catalog[];
  technician: Catalog[];
  technology: Catalog[];
  typemeter: Catalog[];
  typeseal: Catalog[];
};
