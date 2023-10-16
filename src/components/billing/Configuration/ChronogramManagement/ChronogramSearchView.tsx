import { FC } from 'react';
import { Box, Grid } from '@mui/material';
import { BillingModels } from '@/models';
import { useTranslation } from '@/hooks';
import { Button, Table } from '@/components';
import { getColumnsConfiguration } from './ChronogramManagement.constants';
import { VisibilitySharp } from '@mui/icons-material';
import { useTheme } from '@/context';

interface ChronogramSearchViewProps {
  chronogramInfo: BillingModels.ChronogramInterface[];
  onEditChronogram: (id: string) => void;
  onDetailChronogram: (id: string) => void;
  onCreateChronogram: () => void;
}

const ChronogramSearchViewComponent: FC<ChronogramSearchViewProps> = ({
  chronogramInfo,
  onEditChronogram,
  onDetailChronogram,
  onCreateChronogram,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <>
      <Table
        title={t('billing.maintenance.chronogramManagement.tabName')}
        variant="secondary"
        columns={getColumnsConfiguration(t)}
        rows={chronogramInfo}
        customActions={[
          {
            tooltip: t('billing.maintenance.chronogramManagement.visibilityIconLabel'),
            icon: <VisibilitySharp style={{ color: theme.currentTheme.palette.common.tableBtnEdit }} />,
            onClick: (id) => onDetailChronogram(id.toString()),
          },
        ]}
        onEdit={(id) => onEditChronogram(id.toString())}
        onDelete={(id) => {
          console.log('[TODO]: Implement action with id', id);
        }}
      />
      <Grid container justifyContent="flex-end" sx={{ p: 2 }}>
        <Box sx={{ pr: 2 }}>
          <Button type="button" variant="contained" buttonType="cancel">
            {t('billing.maintenance.chronogramManagement.clearSearchButtonLabel')}
          </Button>
        </Box>
        <Box>
          <Button type="button" variant="contained" buttonType="save" onClick={onCreateChronogram}>
            {t('billing.maintenance.chronogramManagement.createButtonLabel')}
          </Button>
        </Box>
      </Grid>
    </>
  );
};

export default ChronogramSearchViewComponent;
