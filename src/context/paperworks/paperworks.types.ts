import {
  PaperworksStateModel,
  PaperworkModel,
  PaperworkListModel,
  CatalogModel,
  PaperworkSectorsCanGenerateListModel,
  PaperworkSectorsCanSeeListModel,
  PaperworksStateListModel,
  PaperworksTransitionListModel,
  PaperworksReasonsListModel,
  PaperworkSectorModel,
  PaperworkReasonsModel,
  PaperworksParameter,
  PaperworksFilters,
} from '@/models/paperworks';
import { GridPaginationModel } from '@mui/x-data-grid';

export interface State {
  // Catalogs
  catalogPaperworkTypes: CatalogModel[];
  catalogPriority: CatalogModel[];
  catalogUserSupply: CatalogModel[];
  catalogTasks: CatalogModel[];
  catalogWoTypes: CatalogModel[];
  catalogSectors: CatalogModel[];
  catalogReasons: CatalogModel[];
  catalogParameters: CatalogModel[];
  catalogStates: CatalogModel[];
  catalogReports: CatalogModel[];

  // Lists
  stateList: PaperworksStateListModel[];
  paperworksList: PaperworkListModel[];
  sectorsAllowedToGenerateList: PaperworkSectorsCanGenerateListModel[];
  sectorsAllowedToSeeList: PaperworkSectorsCanSeeListModel[];
  transitionList: PaperworksTransitionListModel[];
  reasonsList: PaperworksReasonsListModel[];
  parametersList: PaperworksReasonsListModel[];

  // Interactions
  isLoading: boolean;

  // Paperwork globar indentify
  idPaperwork: number;
  shortName: string;

  sectorDataEdit: PaperworkSectorModel;
  editMode: boolean;
  stateById: PaperworksStateModel;
  editData: PaperworkModel;
  reasonsDataEdit: PaperworkReasonsModel;
  parameterDataEdit: PaperworksParameter;

  papeworksTotalRows: number;
}

interface ResponseObj {
  success: boolean;
  message?: string;
}

export interface Actions {
  getCatalogs: () => Promise<void>;
  setIsPaperworkEditMode: (isEdit: boolean) => void;
}

export interface HomeActions {
  getPaperworksList: () => Promise<void>;
  resetState: () => void;
  applyFilters: (appliedFilters: PaperworksFilters) => void;
  updatePagination: (pagination: GridPaginationModel) => void;
}

export interface GeneralActions {
  createPaperwork: (data: any) => Promise<ResponseObj>;
  updatePaperwork: (data: any) => Promise<ResponseObj>;
  deletePaperwork: (id: number) => Promise<ResponseObj>;
  getEditData: (id: number) => Promise<ResponseObj>;
}

export interface StatesActions {
  getStatesListById: (id: number) => Promise<ResponseObj>;
  getStateCatalogs: () => Promise<void>;
  createState: (data: any) => Promise<ResponseObj>;
  updateState: (data: any) => Promise<ResponseObj>;
  deleteState: (id: number) => Promise<ResponseObj>;
  isWOType: () => boolean;
  getStateDataById: (id: number) => Promise<ResponseObj>;
}

export interface SectorsActions {
  getCatalogs: () => Promise<void>;
  getSectorsList: () => Promise<void>;
  createSector: (data: any) => Promise<ResponseObj>;
  updateSector: (data: any) => Promise<ResponseObj>;
  deleteSector: (id: number) => Promise<ResponseObj>;
  getEditData: (id: number) => Promise<ResponseObj>;
}

export interface TransitionStatesActions {
  getTransitionsList: () => Promise<ResponseObj>;
  updateOrders: (data: any) => Promise<ResponseObj>;
}

export interface ReasonsActions {
  createReason: (data: any) => Promise<ResponseObj>;
  updateReason: (data: any) => Promise<ResponseObj>;
  getReasonsCatalogs: () => Promise<void>;
  getReasonsList: () => Promise<void>;
  getEditData: (id: number) => Promise<ResponseObj>;
  deleteReason: (id: number) => Promise<ResponseObj>;
}

export interface ParametersActions {
  getParametersCatalogs: () => Promise<void>;
  getParametersList: () => Promise<void>;
  getParameter: (id: number) => Promise<ResponseObj>;
  createParameter: (data: PaperworksParameter) => Promise<ResponseObj>;
  updateParameter: (data: PaperworksParameter) => Promise<ResponseObj>;
  deleteParameter: (id: number) => Promise<ResponseObj>;
  cleanSelectedParameter: () => void;
}

export interface ContextType extends State {
  actions?: Actions;
  homeActions?: HomeActions;
  generalActions?: GeneralActions;
  statesActions?: StatesActions;
  sectorsActions?: SectorsActions;
  reasonsActions?: ReasonsActions;
  transitionStatesActions?: TransitionStatesActions;
  parametersActions?: ParametersActions;
}
