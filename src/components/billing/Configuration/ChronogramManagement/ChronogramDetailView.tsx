import { FC } from 'react';
import { Grid } from '@mui/material';
import { BillingModels } from '@/models';
import { useTranslation } from '@/hooks';
import { Button, Table } from '@/components';
import { getColumnsConfigurationDetail } from './ChronogramManagement.constants';

interface ChronogramDetailViewProps {
  chronogramInfoToDetail: BillingModels.ChronogramInterface[];
  onCancelModalDetail: () => void;
}

const ChronogramDetailViewComponent: FC<ChronogramDetailViewProps> = ({ chronogramInfoToDetail, onCancelModalDetail }) => {
  const { t } = useTranslation();

  return (
    <>
      <Table variant="secondary" columns={getColumnsConfigurationDetail(t)} rows={chronogramInfoToDetail} />
      <Grid container justifyContent="center" sx={{ p: 2 }}>
        <Button type="button" variant="contained" buttonType="save" onClick={onCancelModalDetail}>
          {t('billing.maintenance.chronogramManagement.closeButtonLabel')}
        </Button>
      </Grid>
    </>
  );
};

export default ChronogramDetailViewComponent;
