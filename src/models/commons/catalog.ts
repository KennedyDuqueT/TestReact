export interface SimpleCatalog {
  id: number;
  name: string;
}

export interface Catalog extends SimpleCatalog {
  code?: string;
  description?: string;
}

export enum DialogActions {
  CREATE = 'Create',
  UPDATE = 'Update',
  DELETE = 'Delete',
}

export type DialogActionsStateKeys = 'openCreateDialog' | 'openUpdateDialog' | 'openDeleteDialog';
