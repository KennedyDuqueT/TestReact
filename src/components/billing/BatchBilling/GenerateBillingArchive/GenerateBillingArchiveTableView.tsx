import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { useTranslation } from '@/hooks';
import { Button, Table } from '@/components';
import { Box, Grid } from '@mui/material';
import { getColumnsConfiguration } from './GenerateBillingArchive.constants';
import { useGenerateBillingArchive } from '@/context/billing';
interface GenerateBillingArchiveTableViewProps {
  setSelectedGenerateBillingArchive: Dispatch<SetStateAction<number[]>>;
  onConfirmGenerateBillingArchive: () => void;
}

const GenerateBillingArchiveTableViewComponent: FC<GenerateBillingArchiveTableViewProps> = ({
  setSelectedGenerateBillingArchive,
  onConfirmGenerateBillingArchive,
}) => {
  const { tableGenerateBillingArchive } = useGenerateBillingArchive();
  const { t } = useTranslation();
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box maxHeight="400px" overflow="auto">
          <Table
            title={t('billing.batchBilling.generateBillingArchive.generateBillingArchiveTitleFormLabel')}
            variant="secondary"
            columns={getColumnsConfiguration(t)}
            multiselect
            rows={[tableGenerateBillingArchive]}
            onRowSelectionChange={(rowSelection) => {
              setSelectedGenerateBillingArchive(rowSelection as number[]);
              setIsButtonEnabled(rowSelection.length > 0);
            }}
          />
        </Box>
      </Grid>
      <Grid container justifyContent="flex-end" item xs={12} mt={2}>
        <Box pr={5}>
          <Button type="button" variant="contained" buttonType="save" onClick={onConfirmGenerateBillingArchive} disabled={!isButtonEnabled}>
            {t('billing.batchBilling.generateBillingArchive.confirmButtonLabel')}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default GenerateBillingArchiveTableViewComponent;
