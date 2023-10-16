import { Button, WrapperForm } from '@/components/ui';
import { useTranslation } from '@/hooks';
import { Box, Grid } from '@mui/material';
import { FC } from 'react';
import { useTheme } from '@/context';
import { ParametersConfigTypeEnum } from './ParametersConfigEnum';

interface ParametersButtonsProps {
  onOpenFormModal: (parametersConfig: ParametersConfigTypeEnum, formTitles: string) => void;
}

const ParametersButtonsComponent: FC<ParametersButtonsProps> = ({ onOpenFormModal }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const handleOpenFormModal = (parametersConfig: ParametersConfigTypeEnum, formTitles: string) => {
    onOpenFormModal(parametersConfig, formTitles);
  };
  return (
    <WrapperForm title={t('billing.maintenance.parameterManagement.tabName')} variant="secondary">
      <Grid container>
        <Grid item xs={4} sx={{ mt: 2, mb: 2, pr: 6 }}>
          <Grid item xs={12} mt={2}>
            <Button
              variant="contained"
              width={1}
              onClick={() =>
                handleOpenFormModal(ParametersConfigTypeEnum.NatureConcept, t('billing.maintenance.parameterManagement.natureConceptModalTitle'))
              }
              buttonType="cancel"
            >
              {t('billing.maintenance.parameterManagement.natureConceptButtonLabel')}
            </Button>
          </Grid>
          <Grid item xs={12} mt={2}>
            <Button
              variant="contained"
              width={1}
              onClick={() => handleOpenFormModal(ParametersConfigTypeEnum.Taxes, t('billing.maintenance.parameterManagement.taxesModalTitle'))}
              buttonType="cancel"
            >
              {t('billing.maintenance.parameterManagement.taxesButtonLabel')}
            </Button>
          </Grid>
          <Grid mt={2}>
            <Button
              variant="contained"
              width={1}
              onClick={() =>
                handleOpenFormModal(ParametersConfigTypeEnum.UnitsMeasure, t('billing.maintenance.parameterManagement.unitsMeasureModalTitle'))
              }
              buttonType="cancel"
            >
              {t('billing.maintenance.parameterManagement.unitsMeasureButtonLabel')}
            </Button>
          </Grid>
          <Grid mt={2}>
            <Button
              variant="contained"
              width={1}
              onClick={() =>
                handleOpenFormModal(
                  ParametersConfigTypeEnum.CalculationMethod,
                  t('billing.maintenance.parameterManagement.calculationMethodModalTitle')
                )
              }
              buttonType="cancel"
            >
              {t('billing.maintenance.parameterManagement.calculationMethodButtonLabel')}
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={4} sx={{ mt: 2, mb: 2, pl: 3, pr: 3 }}>
          <Grid mt={2}>
            <Button
              variant="contained"
              width={1}
              onClick={() =>
                handleOpenFormModal(ParametersConfigTypeEnum.ServiceGroup, t('billing.maintenance.parameterManagement.serviceGroupModalTitle'))
              }
              buttonType="cancel"
            >
              {t('billing.maintenance.parameterManagement.serviceGroupButtonLabel')}
            </Button>
          </Grid>
          <Grid mt={2}>
            <Button
              variant="contained"
              width={1}
              onClick={() =>
                handleOpenFormModal(ParametersConfigTypeEnum.AverageBilling, t('billing.maintenance.parameterManagement.averageBillingModalTitle'))
              }
              buttonType="cancel"
            >
              {t('billing.maintenance.parameterManagement.averageBillingButtonLabel')}
            </Button>
          </Grid>
          <Grid mt={2}>
            <Button
              variant="contained"
              width={1}
              onClick={() =>
                handleOpenFormModal(ParametersConfigTypeEnum.BillingType, t('billing.maintenance.parameterManagement.billingTypeModalTitle'))
              }
              buttonType="cancel"
            >
              {t('billing.maintenance.parameterManagement.billingTypeButtonLabel')}
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={4} sx={{ mt: 2, mb: 2, pl: 6 }}>
          <Grid mt={2}>
            <Button
              variant="contained"
              width={1}
              onClick={() =>
                handleOpenFormModal(ParametersConfigTypeEnum.ChargeType, t('billing.maintenance.parameterManagement.chargeTypeModalTitle'))
              }
              buttonType="cancel"
            >
              {t('billing.maintenance.parameterManagement.chargeTypeButtonLabel')}
            </Button>
          </Grid>
          <Grid mt={2}>
            <Button
              variant="contained"
              width={1}
              onClick={() =>
                handleOpenFormModal(ParametersConfigTypeEnum.CalculationType, t('billing.maintenance.parameterManagement.calculationTypeModalTitle'))
              }
              buttonType="cancel"
            >
              {t('billing.maintenance.parameterManagement.calculationTypeButtonLabel')}
            </Button>
          </Grid>
          <Grid mt={2}>
            <Button
              variant="contained"
              width={1}
              onClick={() =>
                handleOpenFormModal(ParametersConfigTypeEnum.BillingMode, t('billing.maintenance.parameterManagement.billingModeModalTitle'))
              }
              buttonType="cancel"
            >
              {t('billing.maintenance.parameterManagement.billingModeButtonLabel')}
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ mt: 1 }}>
          <Box sx={{ borderBottom: `1px solid ${theme.currentTheme.palette.common.wrapperFormHLineBgSecondary}` }}></Box>
        </Grid>
      </Grid>
    </WrapperForm>
  );
};

export default ParametersButtonsComponent;
