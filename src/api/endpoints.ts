export const ENDPOINTS = {
  // Paperworks module
  getTasks: 'procedure/api/tasks',
  getWoByType: 'procedure/api/procedurestemplates/bytype',
  getStates: 'procedure/api/stages',
  getReports: 'procedure/api/reports',
  procedureStages: 'procedure/api/proceduresstages',
  procedureTemplates: 'procedure/api/procedurestemplates',

  // Sectors module
  catalogDepartments: 'procedure/api/departments',
  procedureDepartments: 'procedure/api/proceduresdepartments',

  // Transition States module
  getTransitionStatesOrder: 'procedure/api/transitions',

  // Reasons module
  catalogReasons: 'procedure/api/reasons',
  procedureReason: 'procedure/api/proceduresreasons',

  // Parameters module
  catalogParameters: 'procedure/api/parameters',
  procedureParameter: 'procedure/api/proceduresparameters',
};
