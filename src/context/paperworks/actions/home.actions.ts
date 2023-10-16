import { useEffect, useState } from 'react';
import { GridPaginationModel } from '@mui/x-data-grid';
import { SearchParamsModel } from '@/models/commons';
import { useLoader } from '@/context';
import { useApi } from '@/hooks';
import { PaperworksFilters } from '../../../models/paperworks/paperworks';
import { reducerActions } from '../paperworks.constants';
import { HomeActions, State } from '../paperworks.types';

const useHomeActions = (state: State, dispatch: any): HomeActions => {
  const { actions } = useLoader();
  const [searchParams, setSearchParams] = useState<Partial<SearchParamsModel>>({});
  const getProcedures = useApi({ endpoint: 'procedure/api/procedurestemplates', method: 'get', withLoader: false });

  useEffect(() => {
    getPaperworksList();
  }, [searchParams]);

  const getPaperworksList = async () => {
    try {
      actions?.showLoader(true);

      const procedureList = await getProcedures({ queryString: { ...searchParams } });

      dispatch(reducerActions.setPaperworksTotalRows(procedureList.paging.totalRecordCount));

      const paperworksList = procedureList.data.map((item: any) => {
        const typeFound = state.catalogPaperworkTypes.find((cpt: any) => cpt.id === item.procedureTypeId);

        return {
          id: item.id,
          code: item.id,
          type: typeFound?.name,
          shortName: item.shortName,
          description: item.description,
          typeId: item.procedureTypeId,
        };
      });

      dispatch(reducerActions.setPaperworksList(paperworksList));
    } catch (error) {
      // dispatch(reducerActions.setCatalogPaperworksType([]));
      dispatch(reducerActions.setPaperworksList([]));
    } finally {
      actions?.showLoader(false);
    }
  };

  const applyFilters = async (appliedFilters: PaperworksFilters) => {
    const fields = [];
    const search = [];

    for (const key in appliedFilters) {
      const filterValue = appliedFilters[key as keyof PaperworksFilters];

      if (filterValue) {
        fields.push(key);
        search.push(filterValue);
      }
    }

    if (fields.length > 0) {
      setSearchParams({ ...searchParams, ...{ fields: fields.join(','), search: search.join(',') } });
    } else {
      delete searchParams.fields;
      delete searchParams.search;

      setSearchParams({ ...searchParams });
    }
  };

  const updatePagination = async (pagination: GridPaginationModel) => {
    setSearchParams({ ...searchParams, ...{ pageSize: pagination.pageSize, pageNumber: pagination.page + 1 } });
  };

  const resetState = () => {
    dispatch(reducerActions.setPaperworkId(-1));
    dispatch(reducerActions.setStateList([]));
    dispatch(reducerActions.setTransitionList([]));
  };

  return {
    resetState,
    getPaperworksList,
    applyFilters,
    updatePagination,
  };
};

export { useHomeActions };
