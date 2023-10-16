import { Box, Grid } from '@mui/material';
import { FC, useEffect, useState } from 'react';

import { ModalConfiguration, ModalOptionsConfiguration } from '@/models/commons';
import { Table, Button } from '@/components/ui';
import { useTranslation } from '@/hooks';
import { SuccessIcon, AdvertenceIcon } from '@/assets';
import { useUnclaimedDeposits } from '@/context';

import { getColumnsConfiguration, searchResultsTableInitialValue } from './SearchResultsTable.constants';

interface Props {
  onSubmit: (data: ModalConfiguration) => void;
  onConfirm: (data: ModalOptionsConfiguration) => void;
}

export const SearchResultsTable: FC<Props> = ({ onSubmit, onConfirm }) => {
  const { t } = useTranslation();

  const { actions, searchResults } = useUnclaimedDeposits();
  const [unclaimedDeposits, setUnclaimedDeposits] = useState([searchResultsTableInitialValue]);

  const onContinue = () => {
    onSubmit({
      buttonText: t('customerExperience.unclaimedDeposits.accept'),
      icon: SuccessIcon,
      message: t('customerExperience.unclaimedDeposits.paymentoOrdersCreated'),
      modalTitle: t('customerExperience.unclaimedDeposits.processedSupplies'),
    });
  };

  const beforeContinue = () => {
    onConfirm({
      buttonSucessText: t('customerExperience.unclaimedDeposits.accept'),
      buttonCancelText: t('customerExperience.unclaimedDeposits.cancel'),
      icon: AdvertenceIcon,
      message: t('customerExperience.unclaimedDeposits.areyouSurePlaceOrders'),
      modalTitle: t('customerExperience.unclaimedDeposits.confirmProcess'),
      onSubmit: onContinue,
    });
  };

  useEffect(() => {
    actions?.getAllUnclaimedDeposits();
  }, []);

  useEffect(() => {
    setUnclaimedDeposits(searchResults);
  }, [searchResults]);

  return (
    <>
      <Grid container mt={-3} mx={-3} width={'calc(100% + 48px)'}>
        <Grid item xs={12}>
          <Table
            title={t('customerExperience.unclaimedDeposits.searchResults')}
            variant="secondary"
            columns={getColumnsConfiguration(t)}
            multiselect
            rows={unclaimedDeposits}
            onRowSelectionChange={() => {
              // setSelectedGenerateBillingArchive(rowSelection as number[]);
              // setIsButtonEnabled(rowSelection.length > 0);
            }}
          />
        </Grid>
      </Grid>

      <Box display="flex" width={1} justifyContent="flex-end" mt={4}>
        <Box display="flex" width={1} justifyContent="flex-end">
          <Box sx={{ flex: 1 }} />

          <Button variant="contained" buttonType="primary" onClick={beforeContinue} style={{ marginRight: 24 }}>
            {t('customerExperience.unclaimedDeposits.process')}
          </Button>
        </Box>
      </Box>
    </>
  );
};
