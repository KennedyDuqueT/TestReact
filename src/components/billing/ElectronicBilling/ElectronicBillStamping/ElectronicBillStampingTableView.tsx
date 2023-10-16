import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { BillingModels } from '@/models';
import { useTranslation } from '@/hooks';
import { Button, Table } from '@/components';
import { Box, Grid, Typography } from '@mui/material';
import { getColumnsConfiguration } from './ElectronicBillStamping.constants';

interface ElectronicBillStampingTableViewProps {
  electronicBillStampingInfo: BillingModels.ElectronicBillStampingInterface[];
  onSendElectronicBillStamping: () => void;
  setSelectedElectronicBillStamping: Dispatch<SetStateAction<number[]>>;
}

const ElectronicBillStampingTableViewComponent: FC<ElectronicBillStampingTableViewProps> = ({
  electronicBillStampingInfo,
  onSendElectronicBillStamping,
  setSelectedElectronicBillStamping,
}) => {
  const { t } = useTranslation();
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [selectedRowCount, setSelectedRowCount] = useState<number>(0);
  const selected = selectedRowCount + '/' + electronicBillStampingInfo.length;

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box maxHeight="400px" overflow="auto">
          <Table
            title={t('billing.electronicBilling.electronicBillStamping.resultFieldsTitleTableLabel')}
            variant="secondary"
            columns={getColumnsConfiguration(t)}
            rows={electronicBillStampingInfo}
            multiselect
            onRowSelectionChange={(rowSelection) => {
              setSelectedElectronicBillStamping(rowSelection as number[]);
              setIsButtonEnabled(rowSelection.length > 0);
              setSelectedRowCount(rowSelection.length);
            }}
          />
        </Box>
      </Grid>
      <Grid container mt={2}>
        <Grid item xs={6} pl={4}>
          <Typography fontSize={21}>
            {t('billing.electronicBilling.electronicBillStamping.selectedRegistersLabel')} {selected}
          </Typography>
        </Grid>
        <Grid container justifyContent="flex-end" item xs={6}>
          <Box pr={3}>
            <Button type="button" variant="contained" buttonType="save" onClick={onSendElectronicBillStamping} disabled={!isButtonEnabled}>
              {t('billing.electronicBilling.electronicBillStamping.sendButtonLabel')}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ElectronicBillStampingTableViewComponent;
