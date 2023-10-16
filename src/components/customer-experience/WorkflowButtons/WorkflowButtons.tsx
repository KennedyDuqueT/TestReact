import React from 'react';
import { Grid } from '@mui/material';
import { Button } from '@/components/ui';
import { useTranslation } from '@/hooks';

export const WorkflowButtons = () => {
  const { t } = useTranslation();
  return (
    <Grid container spacing={3} mt={2} px={4} justifyContent="space-between">
      <Grid item>
        <Button
          buttonType="secondary"
          onClick={() => {
            console.log('click');
          }}
        >
          {t('customerExperience.workflowButtons.back')}
        </Button>
        <Button
          buttonType="secondary"
          onClick={() => {
            console.log('click');
          }}
          style={{ marginLeft: '10px' }}
          disabled
        >
          {t('customerExperience.workflowButtons.transferToCashier')}
        </Button>
      </Grid>

      <Grid item>
        <Button
          buttonType="finish"
          onClick={() => {
            console.log('click');
          }}
        >
          {t('customerExperience.workflowButtons.finishPaperwork')}
        </Button>

        <Button
          buttonType="primary"
          onClick={() => {
            console.log('click');
          }}
          style={{ marginLeft: '10px' }}
        >
          {t('customerExperience.workflowButtons.next')}
        </Button>
      </Grid>
    </Grid>
  );
};
