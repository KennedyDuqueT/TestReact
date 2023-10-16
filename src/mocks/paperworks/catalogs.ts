import { CatalogModel } from '@/models/paperworks';
import { delay } from '../helpers';

const catalogPaperworkTypes: CatalogModel[] = [
  {
    id: 0,
    name: 'tipo 1',
    description: 'este es el tipo 1',
  },
  {
    id: 1,
    name: 'tipo 2',
    description: 'este es el tipo 2',
  },
];

export const getProcedureTypeMock = async (): Promise<CatalogModel[]> => {
  await delay(2000);

  return catalogPaperworkTypes;
};

const catalogPriority: CatalogModel[] = [
  { id: 0, name: 'prioridad 1', description: '1' },
  { id: 1, name: 'prioridad 2', description: '2' },
];

export const getPriorityCatalogMock = async (): Promise<CatalogModel[]> => {
  await delay(2000);

  return catalogPriority;
};

const userSupply: CatalogModel[] = [
  { id: 0, name: 'user supply 1', description: '1' },
  { id: 1, name: 'user supply 2', description: '2' },
  { id: 2, name: 'user supply 3', description: '3' },
];

export const getUserSupplyCatalogMock = async (): Promise<CatalogModel[]> => {
  await delay(2000);

  return userSupply;
};

const paperworksList = {
  succeeded: true,
  data: [
    {
      id: 0,
      shortName: 'Demo tramite',
      priorityId: 1,
      procedureTypeId: 2,
      days: 0,
      hours: 0,
      minutes: 0,
      requiredUserSupply: 2,
      description: 'string',
      procedureStages: [
        {
          id: 0,
          procedureId: 0,
          initDate: '2023-07-08T22:24:09.544Z',
          endDate: '2023-07-08T22:24:09.544Z',
          stage: 'string',
          task: 'string',
          isStartingStage: true,
          isEndingStage: true,
          isBrigadeRequired: true,
          isObservationsRequired: true,
          isReportEmiting: true,
          report: 'string',
          isRequiredWorkOrder: true,
          workOrderId: 0,
          isWorkOrderCompletionRequired: true,
        },
      ],
      procedureDepartments: [
        {
          id: 0,
          department: 'string',
          isCreationAllowed: true,
          isVisibilityAllowed: true,
          description: 'string',
          update: true,
          procedureStages: [
            {
              id: 0,
              procedureId: 0,
              initDate: '2023-07-08T22:24:09.544Z',
              endDate: '2023-07-08T22:24:09.544Z',
              stage: 'string',
              task: 'string',
              isStartingStage: true,
              isEndingStage: true,
              isBrigadeRequired: true,
              isObservationsRequired: true,
              isReportEmiting: true,
              report: 'string',
              isRequiredWorkOrder: true,
              workOrderId: 0,
              isWorkOrderCompletionRequired: true,
            },
          ],
        },
      ],
      procedureReasons: [
        {
          id: 0,
          reason: 'string',
        },
      ],
    },
  ],
  paging: {
    pageNo: 0,
    pageSize: 0,
    pageCount: 0,
    totalRecordCount: 0,
  },
};

export const getPaperworksListMock = async () => {
  await delay(2000);

  const newCopy = JSON.parse(JSON.stringify(paperworksList));

  newCopy.data = new Array(5).fill(null).map((_, dataIndex) => {
    const dataItem = JSON.parse(JSON.stringify(newCopy.data[0]));
    dataItem.id = dataIndex;

    dataItem.procedureStages = new Array(3).fill(null).map((_, stageIndex) => {
      const stage = JSON.parse(JSON.stringify(dataItem.procedureStages[0]));
      stage.id = stageIndex;
      return stage;
    });

    dataItem.procedureDepartments = dataItem.procedureDepartments.map((department: any, departmentIndex: any) => {
      department.id = departmentIndex;
      department.procedureStages = new Array(2).fill(null).map((_, stageIndex) => {
        const stage = JSON.parse(JSON.stringify(department.procedureStages[0]));
        stage.id = stageIndex;
        return stage;
      });

      return department;
    });

    return dataItem;
  });

  return newCopy;
};

export const getPaperworkByIdMock = async (id: number) => {
  await delay(2000);

  return {
    succeeded: true,
    data: {
      id,
      shortName: `Este es un demo ${id}`,
      priorityId: 1,
      procedureTypeId: 1,
      days: 1,
      hours: 2,
      minutes: 3,
      requiredUserSupply: 2,
      description: 'Esta es una descripcion de prueba',
      procedureStages: [],
    },
    paging: {
      pageNo: 0,
      pageSize: 0,
      pageCount: 0,
      totalRecordCount: 0,
    },
  };
};

const stateItem = {
  id: 0,
  procedureId: 0,
  initDate: '2023-07-13T05:10:18.441Z',
  endDate: '2023-07-13T05:10:18.441Z',
  stage: 'string',
  task: 'string',
  stateId: 0,
  taskId: 0,
  isStartingState: false,
  isEndingState: false,
  isStartingStage: false,
  isEndingStage: false,
  isBrigadeRequired: false,
  isObservationsRequired: false,
  isReportEmiting: false,
  reportId: 0,
  isRequiredWorkOrder: false,
  workOrderId: 0,
  isWorkOrderCompletionRequired: false,
};

export const getStatesListMock = async () => {
  await delay(2000);

  const states = [];
  const currentDate = new Date();

  for (let i = 1; i <= 5; i++) {
    const newState = { ...stateItem };
    newState.id = i;
    newState.initDate = currentDate.toISOString();
    newState.endDate = currentDate.toISOString();
    states.push(newState);
  }

  return {
    succeeded: true,
    data: states,
    paging: {
      pageNo: 0,
      pageSize: 0,
      pageCount: 0,
      totalRecordCount: 0,
    },
  };
};

export const getStateByIdMock = async (id: number) => {
  await delay(2000);

  const newStateItem = { ...stateItem, id: id };

  return {
    succeeded: true,
    data: newStateItem,
    paging: {
      pageNo: 0,
      pageSize: 0,
      pageCount: 0,
      totalRecordCount: 0,
    },
  };
};

const task = {
  id: 0,
  name: 'string',
  title: 'string',
  eventId: 0,
  event: {
    id: 0,
    name: 'string',
    command: 'string',
    description: 'string',
    eventTypeId: 0,
    eventType: {
      id: 0,
      name: 'string',
      description: 'string',
    },
  },
  description: 'string',
};

export const getTasksCatalogMock = async () => {
  await delay(2000);

  const tasks = [];
  for (let i = 0; i < 5; i++) {
    const newTask = { ...task };
    newTask.id = i;
    newTask.name = 'string' + i;
    tasks.push(newTask);
  }

  return {
    succeeded: true,
    data: tasks,
    paging: {
      pageNo: 0,
      pageSize: 0,
      pageCount: 0,
      totalRecordCount: 0,
    },
  };
};

export const getReasonsCatalogMock = async () => {
  await delay(2000);

  const data = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    name: `name${index}`,
    title: `title${index}`,
    description: `description${index}`,
  }));

  return {
    succeeded: true,
    data,
    paging: {
      pageNo: 0,
      pageSize: 0,
      pageCount: 0,
      totalRecordCount: 0,
    },
  };
};

export const getReasonsListMock = async () => {
  await delay(2000);

  const data = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    code: `code${index}`,
    description: `description${index}`,
  }));

  return {
    succeeded: true,
    data,
    paging: {
      pageNo: 0,
      pageSize: 0,
      pageCount: 0,
      totalRecordCount: 0,
    },
  };
};
