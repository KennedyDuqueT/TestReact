import { Context, createContext } from 'react';
import { Action } from '@/utils';
import { State, ContextType } from './paperworks.types';
import { Types } from './paperworks.constants';

export const initialState: State = {
  // Catalogs
  catalogPaperworkTypes: [],
  catalogPriority: [],
  catalogUserSupply: [],
  catalogTasks: [],
  catalogWoTypes: [],
  catalogSectors: [],
  catalogReasons: [],
  catalogParameters: [],
  catalogStates: [],
  catalogReports: [],

  // Lists
  stateList: [],
  paperworksList: [],
  sectorsAllowedToGenerateList: [],
  sectorsAllowedToSeeList: [],
  transitionList: [],
  reasonsList: [],
  parametersList: [],

  // Interactions
  isLoading: false,

  // Paperwork globar indentify
  idPaperwork: -1,
  shortName: '',

  sectorDataEdit: {
    id: -1,
    procedureId: -1,
    departmentId: -1,
    department: '',
    isCreationAllowed: false,
    isVisibilityAllowed: false,
    description: '',
    update: false,
    procedureStages: [],
    name: '',
  },

  editMode: false,
  stateById: {
    id: 0,
    procedureId: 0,
    initDate: '',
    endDate: '',
    stateId: 0,
    taskId: 0,
    isStartingState: false,
    isEndingState: false,
    isStartingStage: false,
    isEndingStage: false,
    task: '',
    isBrigadeRequired: false,
    isObservationsRequired: false,
    isReportEmiting: false,
    reportId: 0,
    isRequiredWorkOrder: false,
    workOrderId: 0,
    isWorkOrderCompletionRequired: false,
    name: undefined,
    stageId: 0,
    reportd: 0,
    order: 0,
  },
  editData: {
    id: 0,
    shortName: '',
    priorityId: 0,
    procedureTypeId: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    requiredUserSupply: 0,
    description: '',
    procedureStages: [],
  },
  reasonsDataEdit: {
    id: 0,
    reasonCode: '',
    description: '',
  },
  parameterDataEdit: {
    id: 0,
    procedureId: 0,
    paramId: 0,
    name: '',
    value: '',
    description: '',
  },
  papeworksTotalRows: 0,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    // Interactions UI
    case Types.SET_LOADING:
      return { ...state, isLoading: action.payload };
    case Types.SET_PAPERWORK_ID:
      return { ...state, idPaperwork: action.payload };

    // Set Catalogs
    case Types.SET_CATALOG_PAPERWORKS_TYPE:
      return { ...state, catalogPaperworkTypes: [...action.payload] };
    case Types.SET_CATALOG_PRIORITY:
      return { ...state, catalogPriority: [...action.payload] };
    case Types.SET_CATALOG_USER_SUPPLY:
      return { ...state, catalogUserSupply: [...action.payload] };
    case Types.SET_CATALOG_TASKS:
      return { ...state, catalogTasks: [...action.payload] };
    case Types.SET_CATALOG_WO_TYPES:
      return { ...state, catalogWoTypes: [...action.payload] };
    case Types.SET_CATALOG_SECTORS:
      return { ...state, catalogSectors: [...action.payload] };
    case Types.SET_CATALOG_REASONS:
      return { ...state, catalogReasons: [...action.payload] };
    case Types.SET_CATALOG_PARAMETERS:
      return { ...state, catalogParameters: [...action.payload] };
    case Types.SET_CATALOG_STATES:
      return { ...state, catalogStates: [...action.payload] };
    case Types.SET_CATALOG_REPORTS:
      return { ...state, catalogReports: [...action.payload] };

    // Set Lists
    case Types.SET_PAPERWORKS_LIST:
      return { ...state, paperworksList: [...action.payload] };
    case Types.SET_PAPERWORKS_TOTAL_ROWS:
      return { ...state, papeworksTotalRows: action.payload };

    case Types.SET_STATE_LIST:
      return { ...state, stateList: [...action.payload] };
    case Types.SET_SECTORS_CAN_GENERATE_LIST:
      return { ...state, sectorsAllowedToGenerateList: [...action.payload] };
    case Types.SET_SECTORS_CAN_SEE_LIST:
      return { ...state, sectorsAllowedToSeeList: [...action.payload] };
    case Types.SET_TRANSITION_LIST:
      return { ...state, transitionList: [...action.payload] };
    case Types.SET_REASONS_LIST:
      return { ...state, reasonsList: [...action.payload] };
    case Types.SET_PARAMETERS_LIST:
      return { ...state, parametersList: [...action.payload] };

    // Set edition data
    case Types.SET_STATE_BY_ID:
      return { ...state, stateById: action.payload };
    case Types.SET_EDIT_MODE:
      return { ...state, editMode: action.payload };
    case Types.SET_EDIT_DATA:
      return { ...state, editData: { ...action.payload } };
    case Types.SET_SECTOR_EDIT_DATA:
      return { ...state, sectorDataEdit: action.payload };
    case Types.SET_REASON_EDIT_DATA:
      return { ...state, reasonsDataEdit: action.payload };
    case Types.SET_PARAMETER_EDIT_DATA:
      return { ...state, parameterDataEdit: action.payload || initialState.parameterDataEdit };
    default:
      return state;
  }
};

export const PaperworksContext: Context<ContextType> = createContext(initialState);
