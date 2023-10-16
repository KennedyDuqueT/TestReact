export interface FiltersModel {
  fields: string;
  search: string;
}

export interface PaginationModel {
  pageSize: number;
  pageNumber: number;
}

export interface SearchParamsModel extends FiltersModel, PaginationModel {}

export const DEFAULT_PAGE_SIZE = 10;
export const DEFAULT_PAGINATION_OPTIONS = [1, 5, 10, 15, 20, 25];
