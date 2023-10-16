export interface Item {
  id: number;
  title: string;
}

export interface WorkflowSection {
  title: string;
  items: Item[];
}

export interface ResponseObj {
  success: boolean;
  message?: string;
}

export interface Steps {
  step: number;
  componentName: string;
  stepName: string;
}
