import { delay } from '../helpers';

export const transitions = {
  succeeded: true,
  data: [
    {
      id: 3,
      initDate: '0001-01-01T00:00:00-04:00',
      endDate: '0001-01-01T00:00:00-04:00',
      stageId: 2,
      stage: 'DAR DE ALTA AL CLIENTE',
      taskId: 1,
      task: 'Task 1',
      isStartingStage: false,
      isEndingStage: false,
      isBrigadeRequired: false,
      isObservationsRequired: false,
      isReportEmiting: false,
      reportd: 0,
      report: 'Report 1',
      isRequiredWorkOrder: false,
      workOrderId: 0,
      isWorkOrderCompletionRequired: false,
      order: 0,
    },
    {
      id: 4,
      initDate: '0001-01-01T00:00:00-04:00',
      endDate: '0001-01-01T00:00:00-04:00',
      stageId: 1,
      stage: 'FINALIZAR',
      taskId: 1,
      task: 'Task 1',
      isStartingStage: false,
      isEndingStage: false,
      isBrigadeRequired: false,
      isObservationsRequired: false,
      isReportEmiting: false,
      reportd: 0,
      report: 'Report 1',
      isRequiredWorkOrder: false,
      workOrderId: 1,
      isWorkOrderCompletionRequired: false,
      order: 0,
    },
  ],
};

export const getTransitionsMock = async (id: number) => {
  await delay(2000);
  console.log('id reference: ', id);

  return transitions;
};
