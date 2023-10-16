import { FC } from 'react';
import { Box } from '@mui/material';
import { Tabs } from '@/components';
import { useTranslation } from '@/hooks';
import ElectronicBillStampingCreateOrEditViewComponent from './ElectronicBillStamping/ElectronicBillStampingCreateOrEditView';

const ElectronicBillingTabsComponent: FC = () => {
  const { t } = useTranslation();

  const tabsData = [
    {
      label: t('billing.electronicBilling.electronicBillStamping.tabName'),
      content: <ElectronicBillStampingCreateOrEditViewComponent></ElectronicBillStampingCreateOrEditViewComponent>,
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

export default ElectronicBillingTabsComponent;
