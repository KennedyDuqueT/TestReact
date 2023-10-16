import { FC } from 'react';
import { Box } from '@mui/material';
import { Tabs } from '@/components';
import { useTranslation } from '@/hooks';
import CycleCreateOrEditViewComponent from './CycleManagement/CycleCreateOrEditView';
import RouteCreateOrEditViewComponent from './RouteManagement/RouteCreateOrEditView';
import RateCreateOrEditViewComponent from './RateManagement/RateCreateOrEditView';
import ChronogramCreateOrEditViewComponent from './ChronogramManagement/ChronogramCreateOrEditView';
import ConceptCreateOrEditViewComponent from './ConceptManagement/ConceptCreateOrEditView';
import TariffSchedulesCreateOrEditViewComponent from './TariffSchedulesManagement/TariffSchedulesCreateOrEditView';
import ParametersCreateOrEditViewComponent from './ParameterManagement/ParametersCreateOrEdit';

const ManagementTabsComponent: FC = () => {
  const { t } = useTranslation();
  const tabsData = [
    {
      label: t('billing.maintenance.cyclesManagement.tabName'),
      content: <CycleCreateOrEditViewComponent></CycleCreateOrEditViewComponent>,
      icon: '',
    },
    {
      label: t('billing.maintenance.routesManagement.tabName'),
      content: <RouteCreateOrEditViewComponent></RouteCreateOrEditViewComponent>,
      icon: '',
    },
    {
      label: t('billing.maintenance.ratesManagement.tabName'),
      content: <RateCreateOrEditViewComponent></RateCreateOrEditViewComponent>,
      icon: '',
    },
    {
      label: t('billing.maintenance.chronogramManagement.tabName'),
      content: <ChronogramCreateOrEditViewComponent></ChronogramCreateOrEditViewComponent>,
      icon: '',
    },
    {
      label: t('billing.maintenance.parameterManagement.tabName'),
      content: <ParametersCreateOrEditViewComponent></ParametersCreateOrEditViewComponent>,
      icon: '',
    },
    {
      label: t('billing.maintenance.conceptManagement.tabName'),
      content: <ConceptCreateOrEditViewComponent></ConceptCreateOrEditViewComponent>,
      icon: '',
    },
    {
      label: t('billing.maintenance.tariffSchedulesManagement.tabName'),
      content: <TariffSchedulesCreateOrEditViewComponent></TariffSchedulesCreateOrEditViewComponent>,
      icon: '',
    },
  ];

  return (
    <>
      <Box sx={{ my: 1 }}>
        <Tabs tabs={tabsData} tabVariant="scrollable" />
      </Box>
    </>
  );
};

export default ManagementTabsComponent;
