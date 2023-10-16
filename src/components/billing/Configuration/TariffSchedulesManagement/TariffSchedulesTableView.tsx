import { FC } from 'react';
import { BillingModels } from '@/models';
import { useTranslation } from '@/hooks';
import { Button, Table } from '@/components';
import { getColumnsConfiguration } from './TariffSchedulesManagement.constants';
import { Box, Grid } from '@mui/material';

interface TariffSchedulesFormViewProps {
  tariffSchedulesInfo: BillingModels.TariffSchedulesInterface[];
  onEditTariffSchedules: (id: string) => void;
  onClearTariffSchedules: () => void;
}

const TariffSchedulesTableViewComponent: FC<TariffSchedulesFormViewProps> = ({
  tariffSchedulesInfo,
  onEditTariffSchedules,
  onClearTariffSchedules,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <Grid container>
        <Grid sx={{ pr: 2 }}>
          <Box maxHeight="400px" overflow="auto">
            <Table
              title={t('billing.maintenance.tariffSchedulesManagement.tariffSchedulesTableTitle')}
              variant="secondary"
              columns={getColumnsConfiguration(t)}
              rows={tariffSchedulesInfo}
              onEdit={(id) => onEditTariffSchedules(id.toString())}
            />
          </Box>
        </Grid>
        <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
          <Box sx={{ pr: 5 }}>
            <Button type="button" variant="contained" buttonType="cancel" onClick={onClearTariffSchedules}>
              {t('billing.maintenance.tariffSchedulesManagement.clearSearchButtonLabel')}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default TariffSchedulesTableViewComponent;
