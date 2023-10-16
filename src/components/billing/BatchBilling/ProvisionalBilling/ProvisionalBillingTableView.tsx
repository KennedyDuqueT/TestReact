import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { BillingModels } from '@/models';
import { useTranslation } from '@/hooks';
import { Button, Table } from '@/components';
import { Box, Grid } from '@mui/material';
import { getColumnsConfiguration } from './ProvisionalBilling.constants';

interface ProvisionalBillingTableViewProps {
  provisionalBillingInfo: BillingModels.ProvisionalBillingInterface[];
  setSelectedProvisionalBilling: Dispatch<SetStateAction<number[]>>;
  onConfirmProvisionalBilling: () => void;
}

const ProvisionalBillingTableViewComponent: FC<ProvisionalBillingTableViewProps> = ({
  provisionalBillingInfo,
  setSelectedProvisionalBilling,
  onConfirmProvisionalBilling,
}) => {
  const { t } = useTranslation();
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box maxHeight="400px" overflow="auto">
          <Table
            title={t('billing.batchBilling.provisionalBilling.provisionalBillingTitleFormLabel')}
            variant="secondary"
            columns={getColumnsConfiguration(t)}
            rows={provisionalBillingInfo}
            multiselect
            onRowSelectionChange={(rowSelection) => {
              setSelectedProvisionalBilling(rowSelection as number[]);
              setIsButtonEnabled(rowSelection.length > 0);
            }}
          />
        </Box>
      </Grid>
      <Grid container justifyContent="flex-end" item xs={12} mt={2}>
        <Box pr={5}>
          <Button type="button" variant="contained" buttonType="save" onClick={onConfirmProvisionalBilling} disabled={!isButtonEnabled}>
            {t('billing.batchBilling.provisionalBilling.confirmButtonLabel')}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProvisionalBillingTableViewComponent;
