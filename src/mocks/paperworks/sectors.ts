import { CatalogModel } from '@/models/paperworks';
import { delay } from '../helpers';

export const getDepartmentsCatalogMock = async () => {
  const departments: CatalogModel[] = [];

  for (let i = 0; i <= 10; i++) {
    const department: CatalogModel = {
      id: i,
      name: `Department ${i}`,
      description: `Description for Department ${i}`,
    };
    departments.push(department);
  }

  await delay(2000);

  return {
    succeeded: true,
    data: departments,
    paging: {
      pageNo: 0,
      pageSize: 0,
      pageCount: 0,
      totalRecordCount: 0,
    },
  };
};

const department = {
  id: 0,
  department: 'string',
  isCreationAllowed: true,
  isVisibilityAllowed: false,
  description: 'string',
  update: true,
  procedureStages: [
    {
      id: 0,
      procedureId: 0,
      initDate: '2023-07-17T22:42:34.909Z',
      endDate: '2023-07-17T22:42:34.909Z',
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
};

export const getProcedureDepartmentMock = () => {
  const departments = [];

  for (let i = 1; i <= 10; i++) {
    const isCreationAllowed = Math.random() < 0.5;
    const newDepartment = {
      ...department,
      id: i,
      department: `Department ${i}`,
      isCreationAllowed: isCreationAllowed,
      isVisibilityAllowed: !isCreationAllowed,
      description: `Description for Department ${i}`,
      procedureStages: [
        {
          ...department.procedureStages[0],
          id: i,
          procedureId: i,
          stage: `Stage ${i}`,
          task: `Task ${i}`,
        },
      ],
    };
    departments.push(newDepartment);
  }

  return {
    succeeded: true,
    data: departments,
    paging: {
      pageNo: 1,
      pageSize: 10,
      pageCount: 1,
      totalRecordCount: 10,
    },
  };
};
