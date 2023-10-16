import React, { FC } from 'react';
import { BillingModels } from '@/models';
import { useTranslation } from '@/hooks';
import { Box, Grid } from '@mui/material';
import { getColumnsConfiguration } from './IndividualBilling.constants';
import { Button, Table } from '@/components/ui';

interface IndividualBillingTableViewProps {
  individualBillingInfo: BillingModels.IndividualBillingInterface[];
  onEditIndividualBilling: (id: string) => void;
  lockTableEdit: boolean;
  confirmButtonEnabled: boolean;
  onGenerateTableIndividualBilling: () => void;
  onConfirmTableIndividualBilling: () => void;
}

const IndividualBillingTableViewComponent: FC<IndividualBillingTableViewProps> = ({
  individualBillingInfo,
  onEditIndividualBilling,
  onGenerateTableIndividualBilling,
  lockTableEdit,
  confirmButtonEnabled,
  onConfirmTableIndividualBilling,
}) => {
  const { t } = useTranslation();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box maxHeight="400px" overflow="auto">
          <Table
            title={t('billing.individualBilling.individualBilling.individualBillingTitleTableLabel')}
            variant="secondary"
            columns={getColumnsConfiguration(t)}
            rows={individualBillingInfo}
            onEdit={(id) => {
              if (!lockTableEdit) {
                onEditIndividualBilling(id.toString());
              }
            }}
          />
        </Box>
      </Grid>
      <Grid container justifyContent="flex-end" item xs={12} sx={{ mt: 2 }}>
        <Box pr={5}>
          <Button
            type="button"
            variant="contained"
            buttonType="primary"
            disabled={confirmButtonEnabled}
            onClick={() => onGenerateTableIndividualBilling()}
          >
            {t('billing.individualBilling.individualBilling.generateButtonLabel')}
          </Button>
        </Box>
        <Box pr={5}>
          <Button
            type="button"
            variant="contained"
            buttonType="primary"
            disabled={!confirmButtonEnabled || lockTableEdit}
            onClick={() => onConfirmTableIndividualBilling()}
          >
            {t('billing.individualBilling.individualBilling.confirmButtonLabel')}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default IndividualBillingTableViewComponent;
