import { createAction } from '@/utils';
import {
  CatalogModel,
  PaperworkModel,
  PaperworkListModel,
  PaperworksStateModel,
  PaperworkSectorsCanGenerateListModel,
  PaperworkSectorsCanSeeListModel,
  PaperworksStateListModel,
  PaperworksTransitionListModel,
  PaperworksReasonsListModel,
  PaperworksParametersListModel,
  PaperworkSectorModel,
  PaperworkReasonsModel,
  PaperworksParameter,
} from '@/models/paperworks';

export enum Types {
  // Interactions UI
  SET_LOADING = 'paperworks/setLoading',
  SET_PAPERWORK_ID = 'paperworks/setPaperworkId',

  // Set Catalogs
  SET_CATALOG_PAPERWORKS_TYPE = 'paperworks/setCatalogPaperworksType',
  SET_CATALOG_PRIORITY = 'paperworks/setCatalogPriority',
  SET_CATALOG_USER_SUPPLY = 'paperworks/setCatalogUserSupply',
  SET_CATALOG_TASKS = 'paperworks/setCatalogTasks',
  SET_CATALOG_WO_TYPES = 'paperworks/setCatalogWoTypes',
  SET_CATALOG_SECTORS = 'paperworks/setCatalogSectors',
  SET_CATALOG_REASONS = 'paperworks/setCatalogReasons',
  SET_CATALOG_PARAMETERS = 'paperworks/setCatalogParameters',
  SET_CATALOG_STATES = 'paperworks/setCatalogStates',
  SET_CATALOG_REPORTS = 'paperworks/setCatalogReports',

  // Set Lists
  SET_PAPERWORKS_LIST = 'paperworks/setPaperworksList',
  SET_PAPERWORKS_TOTAL_ROWS = 'paperworks/setPaperworksTotalRows',
  SET_STATE_LIST = 'paperworks/setStateList',
  SET_SECTORS_CAN_GENERATE_LIST = 'paperworks/setSectorsAllowedToGenerateList',
  SET_SECTORS_CAN_SEE_LIST = 'paperworks/setSectorsAllowedToSeeList',
  SET_TRANSITION_LIST = 'paperworks/setTransitionList',
  SET_REASONS_LIST = 'paperworks/setReasonsList',
  SET_PARAMETERS_LIST = 'paperworks/setParametersList',

  // Set edition data
  SET_STATE_BY_ID = 'paperworks/setStateById',
  SET_EDIT_MODE = 'paperworks/setEditMode',
  SET_EDIT_DATA = 'paperworks/setEditData',
  SET_SECTOR_EDIT_DATA = 'paperworks/setSectorEditData',
  SET_REASON_EDIT_DATA = 'paperworks/setReasonEditData',
  SET_PARAMETER_EDIT_DATA = 'paperworks/setParameterEditData',
}

export const reducerActions = {
  // Interactions UI
  setLoading: createAction<Types, boolean>(Types.SET_LOADING),
  setPaperworkId: createAction<Types, number>(Types.SET_PAPERWORK_ID),

  // Set Catalogs
  setCatalogPaperworksType: createAction<Types, CatalogModel[]>(Types.SET_CATALOG_PAPERWORKS_TYPE),
  setCatalogPriority: createAction<Types, CatalogModel[]>(Types.SET_CATALOG_PRIORITY),
  setCatalogUserSupply: createAction<Types, CatalogModel[]>(Types.SET_CATALOG_USER_SUPPLY),
  setCatalogTasks: createAction<Types, CatalogModel[]>(Types.SET_CATALOG_TASKS),
  setCatalogWoTypes: createAction<Types, CatalogModel[]>(Types.SET_CATALOG_WO_TYPES),
  setCatalogSectors: createAction<Types, CatalogModel[]>(Types.SET_CATALOG_SECTORS),
  setCatalogReasons: createAction<Types, CatalogModel[]>(Types.SET_CATALOG_REASONS),
  setCatalogParameters: createAction<Types, CatalogModel[]>(Types.SET_CATALOG_PARAMETERS),
  setCatalogStates: createAction<Types, CatalogModel[]>(Types.SET_CATALOG_STATES),
  setCatalogReports: createAction<Types, CatalogModel[]>(Types.SET_CATALOG_REPORTS),

  // Set Lists
  setPaperworksList: createAction<Types, PaperworkListModel[]>(Types.SET_PAPERWORKS_LIST),
  setPaperworksTotalRows: createAction<Types, number>(Types.SET_PAPERWORKS_TOTAL_ROWS),
  setStateList: createAction<Types, PaperworksStateListModel[]>(Types.SET_STATE_LIST),
  setSectorsAllowedToGenerateList: createAction<Types, PaperworkSectorsCanGenerateListModel[]>(Types.SET_SECTORS_CAN_GENERATE_LIST),
  setSectorsAllowedToSeeList: createAction<Types, PaperworkSectorsCanSeeListModel[]>(Types.SET_SECTORS_CAN_SEE_LIST),
  setTransitionList: createAction<Types, PaperworksTransitionListModel[]>(Types.SET_TRANSITION_LIST),
  setReasonsList: createAction<Types, PaperworksReasonsListModel[]>(Types.SET_REASONS_LIST),
  setParametersList: createAction<Types, PaperworksParametersListModel[]>(Types.SET_PARAMETERS_LIST),

  // Set edition data
  setStateById: createAction<Types, PaperworksStateModel>(Types.SET_STATE_BY_ID),
  setEditMode: createAction<Types, boolean>(Types.SET_EDIT_MODE),
  setEditData: createAction<Types, PaperworkModel>(Types.SET_EDIT_DATA),
  setSectorEditData: createAction<Types, PaperworkSectorModel>(Types.SET_SECTOR_EDIT_DATA),
  setReasonEditData: createAction<Types, PaperworkReasonsModel>(Types.SET_REASON_EDIT_DATA),
  setParameterEditData: createAction<Types, PaperworksParameter>(Types.SET_PARAMETER_EDIT_DATA),
};
