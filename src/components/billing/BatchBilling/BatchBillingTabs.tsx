import { FC } from 'react';
import { Box } from '@mui/material';
import { Tabs } from '@/components';
import { useTranslation } from '@/hooks';
import ReadingImportCreateOrEditViewComponent from './ReadingImportManagement/ReadingImportCreateOrEditView';
import CriticalReadingCreateOrEditViewComponent from './CriticalReadingManagement/CriticalReadingCreateOrEditView';
import ProvisionalBillingCreateOrEditViewComponent from './ProvisionalBilling/ProvisionalBillingCreateOrEditView';
import GenerateBillingArchiveCreateOrEditViewComponent from './GenerateBillingArchive/GenerateBillingArchiveCreateOrEditView';

const BatchBillingTabsComponent: FC = () => {
  const { t } = useTranslation();

  const tabsData = [
    {
      label: t('billing.batchBilling.readingImport.tabName'),
      content: <ReadingImportCreateOrEditViewComponent></ReadingImportCreateOrEditViewComponent>,
      icon: '',
    },
    {
      label: t('billing.batchBilling.criticalReading.tabName'),
      content: <CriticalReadingCreateOrEditViewComponent></CriticalReadingCreateOrEditViewComponent>,
      icon: '',
    },
    {
      label: t('billing.batchBilling.provisionalBilling.tabName'),
      content: <ProvisionalBillingCreateOrEditViewComponent></ProvisionalBillingCreateOrEditViewComponent>,
      icon: '',
    },
    {
      label: t('billing.batchBilling.generateBillingArchive.tabName'),
      content: <GenerateBillingArchiveCreateOrEditViewComponent></GenerateBillingArchiveCreateOrEditViewComponent>,
      icon: '',
    },
  ];

  return (
    <>
      <Box sx={{ my: 1 }}>
        <Tabs tabs={tabsData} />
      </Box>
    </>
  );
};

export default BatchBillingTabsComponent;
