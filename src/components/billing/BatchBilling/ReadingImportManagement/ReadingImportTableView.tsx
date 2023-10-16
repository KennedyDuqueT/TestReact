import { FC } from 'react';
import { BillingModels } from '@/models';
import { useTranslation } from '@/hooks';
import { Button, Table } from '@/components';

import { Box, Grid } from '@mui/material';
import { getColumnsConfiguration } from './ReadingImportManagement.constants';

interface ReadingImportTableViewProps {
  readingImportInfo: BillingModels.ReadingImportInterface[];
  onClearReadingImport: () => void;
}

const ReadingImportTableViewComponent: FC<ReadingImportTableViewProps> = ({ readingImportInfo, onClearReadingImport }) => {
  const { t } = useTranslation();

  return (
    <>
      <Grid container>
        <Grid sx={{ pr: 2 }}>
          <Table
            title={t('billing.batchBilling.readingImport.resultFieldsTitleFormLabel')}
            variant="secondary"
            columns={getColumnsConfiguration(t)}
            rows={readingImportInfo}
          />
        </Grid>
        <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
          <Box sx={{ pr: 5 }}>
            <Button type="button" variant="contained" buttonType="cancel" onClick={onClearReadingImport}>
              {t('billing.batchBilling.readingImport.clearSearchButtonLabel')}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ReadingImportTableViewComponent;
