export interface PaperworksStateModel {
  name: string | undefined;
  id: number;
  procedureId: number;
  initDate: string;
  endDate: string;
  stateId: number;
  taskId: number;
  isStartingState: boolean;
  isEndingState: boolean;
  // TODO: review it with Daniel in the integration stage
  isStartingStage: boolean;
  isEndingStage: boolean;
  task: string;
  stageId: number;
  isBrigadeRequired: boolean;
  isObservationsRequired: boolean;
  isReportEmiting: boolean;
  reportId: number;
  isRequiredWorkOrder: boolean;
  workOrderId: number;
  isWorkOrderCompletionRequired: boolean;
  reportd: number;
  order: number;
}

export interface PaperworkModel {
  id: number;
  shortName: string;
  priorityId: number;
  procedureTypeId: number;
  days: number;
  hours: number;
  minutes: number;
  requiredUserSupply: number;
  description: string;
  procedureStages: PaperworksStateModel[];
}

export interface PaperworkListModel {
  id: number;
  code: number;
  type: string;
  shortName: string;
  description: string;
  typeId: number;
}

export interface CatalogModel {
  id: number;
  name: string;
  description: string;
}

export interface PaperworksStateListModel {
  id: number;
  code: number;
  name: string;
  isStartingState: boolean;
  isEndingState: boolean;
  task: string;
  order: number;
}

export interface PaperworkSectorsCanGenerateListModel {
  id: number;
  code: number;
  description: string;
  isCreationAllowed: boolean;
}

export interface PaperworkSectorsCanSeeListModel {
  id: number;
  code: number;
  update: boolean;
  description: string;
  isVisibilityAllowed: boolean;
}

export interface PaperworksTransitionListModel {
  id: number;
  title: string;
  order: number;
}

export interface PaperworksReasonsListModel {
  id: number;
  code: string;
  description: string;
}

export interface PaperworksParametersListModel {
  id: number;
  description: string;
  value: string;
}

export interface PaperworkSectorModel {
  id: number;
  procedureId: number;
  departmentId: number;
  department: string;
  isCreationAllowed: boolean;
  isVisibilityAllowed: boolean;
  description: string;
  update: boolean;
  procedureStages: any[];
  name: string;
}

export interface PaperworkReasonsModel {
  id: number;
  reasonCode: string;
  description: string;
}

export interface PaperworksParameter {
  id: number;
  procedureId: number;
  paramId: number | null;
  name: string;
  value: string;
  description: string;
}

export interface PaperworksFilters {
  id: string;
  shortName: string;
  procedureTypeId: string;
}
