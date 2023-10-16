import { Dispatch, FC, SetStateAction, useState } from 'react';
import { BillingModels } from '@/models';
import { useTranslation } from '@/hooks';
import { Button, Table } from '@/components';

import { Box, Grid } from '@mui/material';
import { getColumnsConfiguration } from './CriticalReadingManagement.constants';
import { VisibilitySharp } from '@mui/icons-material';
import { useTheme } from '@/context';

interface CriticalReadingTableViewProps {
  criticalReadingInfo: BillingModels.CriticalReadingInterface[];
  onGenerateCriticalReading: () => void;
  onDetailCriticalReading: (id: string) => void;
  setSelectedCriticalReading: Dispatch<SetStateAction<number[]>>;
}

const CriticalReadingTableViewComponent: FC<CriticalReadingTableViewProps> = ({
  criticalReadingInfo,
  onGenerateCriticalReading,
  onDetailCriticalReading,
  setSelectedCriticalReading,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  return (
    <>
      <Grid container>
        <Grid sx={{ pr: 2 }}>
          <Table
            title={t('billing.batchBilling.criticalReading.readingWorkOrdersTitleTableLabel')}
            variant="secondary"
            columns={getColumnsConfiguration(t)}
            rows={criticalReadingInfo}
            multiselect
            onRowSelectionChange={(rowSelection) => {
              setSelectedCriticalReading(rowSelection as number[]);
              setIsButtonEnabled(rowSelection.length > 0);
            }}
            customActions={[
              {
                tooltip: t('billing.batchBilling.criticalReading.visibilityIconLabelTableLabel'),
                icon: <VisibilitySharp style={{ color: theme.currentTheme.palette.common.tableBtnEdit }} />,
                onClick: (id) => onDetailCriticalReading(id.toString()),
              },
            ]}
          />
        </Grid>
        <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
          <Box sx={{ pr: 5 }}>
            <Button type="button" variant="contained" buttonType="save" onClick={onGenerateCriticalReading} disabled={!isButtonEnabled}>
              {t('billing.batchBilling.criticalReading.generateButtonLabel')}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default CriticalReadingTableViewComponent;
