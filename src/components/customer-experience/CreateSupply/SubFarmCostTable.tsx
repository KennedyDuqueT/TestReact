import { FC, useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import { ModalConfiguration } from '@/models/commons';
import { Table } from '@/components/ui';
import { useTranslation } from '@/hooks';
import { useApprovedTable, useTheme } from '@/context';
import { Edit, CancelRounded } from '@mui/icons-material';

import { SubFarmCostTableInitialValue, getColumnsConfiguration } from './SubFarmCostTable.constants';

interface Props {
  onSubmit?: (modalConfig: ModalConfiguration) => void;
}

export const SubFarmCostTable: FC<Props> = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { actions, subFarmCosts } = useApprovedTable();
  const [subFarmCostInfo, setSubFarmCostInfo] = useState([SubFarmCostTableInitialValue]);

  const customActions = [
    {
      tooltip: t('customerExperience.approvedTable.edit'),
      icon: <Edit style={{ color: theme.currentTheme.palette.common.tableBtnEdit }} />,
      onClick: () => {
        console.log('edit');
      },
    },
    {
      tooltip: t('customerExperience.approvedTable.delete'),
      icon: <CancelRounded style={{ color: 'black' }} />,
      onClick: () => {
        console.log('delete');
      },
    },
  ];

  const onSearchSubFarmCosts = async () => {
    await actions?.getAllSubFarmCostRequest();
  };

  useEffect(() => {
    setSubFarmCostInfo(subFarmCosts);
  }, [subFarmCosts]);

  useEffect(() => {
    onSearchSubFarmCosts();
  }, []);

  return (
    <>
      <Grid container mt={-3} mx={-3} width={'calc(100% + 48px)'}>
        <Grid item xs={12}>
          <Box maxHeight="400px" overflow="auto">
            <Table
              title={t('customerExperience.approvedTable.subFarmCost')}
              variant="secondary"
              columns={getColumnsConfiguration(t)}
              multiselect
              rows={subFarmCostInfo}
              onRowSelectionChange={() => {
                // setSelectedGenerateBillingArchive(rowSelection as number[]);
                // setIsButtonEnabled(rowSelection.length > 0);
              }}
              customActions={customActions}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
