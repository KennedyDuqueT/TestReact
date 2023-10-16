import { FC, useState } from 'react';
import { Box, Grid } from '@mui/material';
import { BillingModels } from '@/models';
import { useTranslation } from '@/hooks';
import { Button, Select, TextField } from '@/components';
import { useForm } from 'react-hook-form';
import {
  ParameterCalculationMethodFormInitialValue,
  ParameterUnitsMeasureFormInitialValue,
  ParameterNatureConceptFormInitialValue,
  ParameterTaxesFormInitialValue,
  ParameterBillingTypeFormInitialValue,
  ParameterChargeTypeFormInitialValue,
  ParameterBillingModeFormInitialValue,
} from './ParametersFormManagement.constants';
import { CausesAverageBillingViewComponent, FCBillingPeriodViewComponent } from './ParametersConfigAverageBilling';
import { useTheme } from '@/context';
import { useDataMastersManagement } from '@/context/billing';
import { ParametersConfigTypeEnum } from './ParametersConfigEnum';

interface ParametersFormViewProps {
  onCancelModalForm: () => void;
  onSaveParameter: (parameter: ParametersConfigTypeEnum, dataForm: any) => void;
}

const NatureConceptViewComponent: FC<ParametersFormViewProps> = ({ onCancelModalForm, onSaveParameter }) => {
  const { t } = useTranslation();
  const { serviceTypes } = useDataMastersManagement();
  const theme = useTheme();
  const form = useForm<BillingModels.ParameterNatureConceptInterface>({
    defaultValues: ParameterNatureConceptFormInitialValue,
  });
  const {
    control,
    formState: { errors, isValid },
  } = form;
  return (
    <form>
      <Grid container sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <TextField
            name="code"
            label={t('billing.maintenance.parameterManagement.codeFormLabel')}
            errors={errors}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            control={control}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            name="description"
            label={t('billing.maintenance.parameterManagement.descriptionFormLabel')}
            errors={errors}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            control={control}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Select
            name="serviceTypeId"
            label={t('billing.maintenance.parameterManagement.serviceTypeFormLabel')}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            control={control}
            errors={errors}
            options={serviceTypes}
            keyLabel="name"
            keyValue="id"
          />
        </Grid>
        <Grid container justifyContent="flex-end">
          <Grid item xs={12} sx={{ mt: 3, mb: 3 }}>
            <Box sx={{ borderBottom: `1px solid ${theme.currentTheme.palette.common.wrapperFormHLineBgSecondary}` }}></Box>
          </Grid>
          <Box sx={{ pr: 2 }}>
            <Button type="button" variant="contained" buttonType="cancel" onClick={onCancelModalForm}>
              {t('billing.maintenance.parameterManagement.cancelButtonLabel')}
            </Button>
          </Box>
          <Box>
            <Button
              type="button"
              variant="contained"
              buttonType="save"
              disabled={!isValid}
              onClick={() => onSaveParameter(ParametersConfigTypeEnum.NatureConcept, form.getValues())}
            >
              {t('billing.maintenance.parameterManagement.saveButtonLabel')}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

const TaxesViewComponent: FC<ParametersFormViewProps> = ({ onCancelModalForm, onSaveParameter }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { serviceTypes } = useDataMastersManagement();
  const form = useForm<BillingModels.ParameterTaxesInterface>({
    defaultValues: ParameterTaxesFormInitialValue,
  });
  const {
    control,
    formState: { errors, isValid },
  } = form;
  return (
    <form>
      <Grid container sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <TextField
            name="code"
            label={t('billing.maintenance.parameterManagement.codeFormLabel')}
            errors={errors}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            control={control}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            name="description"
            label={t('billing.maintenance.parameterManagement.descriptionFormLabel')}
            errors={errors}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            control={control}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Select
            name="serviceTypeId"
            label={t('billing.maintenance.parameterManagement.serviceTypeFormLabel')}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            control={control}
            errors={errors}
            options={serviceTypes}
            keyLabel="name"
            keyValue="id"
          />
        </Grid>
        <Grid container justifyContent="flex-end">
          <Grid item xs={12} sx={{ mt: 3, mb: 3 }}>
            <Box sx={{ borderBottom: `1px solid ${theme.currentTheme.palette.common.wrapperFormHLineBgSecondary}` }}></Box>
          </Grid>
          <Box sx={{ pr: 2 }}>
            <Button type="button" variant="contained" buttonType="cancel" onClick={onCancelModalForm}>
              {t('billing.maintenance.parameterManagement.cancelButtonLabel')}
            </Button>
          </Box>
          <Box>
            <Button
              type="button"
              variant="contained"
              buttonType="save"
              disabled={!isValid}
              onClick={() => onSaveParameter(ParametersConfigTypeEnum.Taxes, form.getValues())}
            >
              {t('billing.maintenance.parameterManagement.saveButtonLabel')}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

const UnitsMeasureViewComponent: FC<ParametersFormViewProps> = ({ onCancelModalForm, onSaveParameter }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { serviceTypes } = useDataMastersManagement();
  const form = useForm<BillingModels.ParameterUnitsMeasureInterface>({
    defaultValues: ParameterUnitsMeasureFormInitialValue,
  });
  const {
    control,
    formState: { errors, isValid },
  } = form;
  return (
    <form>
      <Grid container sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <TextField
            name="code"
            label={t('billing.maintenance.parameterManagement.codeFormLabel')}
            errors={errors}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            control={control}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            name="name"
            label={t('billing.maintenance.parameterManagement.unitsMeasureFormLabel')}
            errors={errors}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            control={control}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            name="description"
            label={t('billing.maintenance.parameterManagement.descriptionFormLabel')}
            errors={errors}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            control={control}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Select
            name="serviceTypeId"
            label={t('billing.maintenance.parameterManagement.serviceTypeFormLabel')}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            control={control}
            errors={errors}
            options={serviceTypes}
            keyLabel="name"
            keyValue="id"
          />
        </Grid>
        <Grid container justifyContent="flex-end">
          <Grid item xs={12} sx={{ mt: 3, mb: 3 }}>
            <Box sx={{ borderBottom: `1px solid ${theme.currentTheme.palette.common.wrapperFormHLineBgSecondary}` }}></Box>
          </Grid>
          <Box sx={{ pr: 2 }}>
            <Button type="button" variant="contained" buttonType="cancel" onClick={onCancelModalForm}>
              {t('billing.maintenance.parameterManagement.cancelButtonLabel')}
            </Button>
          </Box>
          <Box>
            <Button
              type="button"
              variant="contained"
              buttonType="save"
              disabled={!isValid}
              onClick={() => onSaveParameter(ParametersConfigTypeEnum.UnitsMeasure, form.getValues())}
            >
              {t('billing.maintenance.parameterManagement.saveButtonLabel')}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

const CalculationMethodViewComponent: FC<ParametersFormViewProps> = ({ onCancelModalForm, onSaveParameter }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { serviceTypes } = useDataMastersManagement();
  const form = useForm<BillingModels.ParameterCalculationMethodInterface>({
    defaultValues: ParameterCalculationMethodFormInitialValue,
  });
  const {
    control,
    formState: { errors, isValid },
  } = form;
  return (
    <form>
      <Grid container sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <TextField
            name="code"
            label={t('billing.maintenance.parameterManagement.codeFormLabel')}
            errors={errors}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            control={control}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            name="description"
            label={t('billing.maintenance.parameterManagement.descriptionFormLabel')}
            errors={errors}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            control={control}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Select
            name="serviceTypeId"
            label={t('billing.maintenance.parameterManagement.serviceTypeFormLabel')}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            control={control}
            errors={errors}
            options={serviceTypes}
            keyLabel="name"
            keyValue="id"
          />
        </Grid>
        <Grid container justifyContent="flex-end">
          <Grid item xs={12} sx={{ mt: 3, mb: 3 }}>
            <Box sx={{ borderBottom: `1px solid ${theme.currentTheme.palette.common.wrapperFormHLineBgSecondary}` }}></Box>
          </Grid>
          <Box sx={{ pr: 2 }}>
            <Button type="button" variant="contained" buttonType="cancel" onClick={onCancelModalForm}>
              {t('billing.maintenance.parameterManagement.cancelButtonLabel')}
            </Button>
          </Box>
          <Box>
            <Button
              type="button"
              variant="contained"
              buttonType="save"
              disabled={!isValid}
              onClick={() => onSaveParameter(ParametersConfigTypeEnum.CalculationMethod, form.getValues())}
            >
              {t('billing.maintenance.parameterManagement.saveButtonLabel')}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

const ServiceGroupViewComponent: FC = () => {
  return <form>{/* Contenido del Grupo de servicios */}</form>;
};

const AverageBillingViewComponent: FC<ParametersFormViewProps> = ({ onCancelModalForm, onSaveParameter }) => {
  const { t } = useTranslation();
  const [showCausesAverage, setShowCausesAverage] = useState(true);
  const [showFCBillingPeriod, setShowFCBillingPeriod] = useState(false);
  const theme = useTheme();
  const handleShowCausesAverage = () => {
    setShowCausesAverage(true);
    setShowFCBillingPeriod(false);
  };
  const handleShowFCBillingPeriod = () => {
    setShowCausesAverage(false);
    setShowFCBillingPeriod(true);
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={7}>
          <Button variant="contained" buttonType="cancel" onClick={handleShowCausesAverage}>
            {t('billing.maintenance.parameterManagement.causesAverageBillingTabsForm')}
          </Button>
        </Grid>
        <Grid item xs={5}>
          <Button variant="contained" buttonType="cancel" onClick={handleShowFCBillingPeriod}>
            {t('billing.maintenance.parameterManagement.FC_PromAverageBillingTabsForm')}
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ mt: 3, mb: 3 }}>
        <Box sx={{ borderBottom: `1px solid ${theme.currentTheme.palette.common.wrapperFormHLineBgSecondary}` }}></Box>
      </Grid>
      {showCausesAverage && <CausesAverageBillingViewComponent onCancelModalForm={onCancelModalForm} onSaveParameter={onSaveParameter} />}
      {showFCBillingPeriod && <FCBillingPeriodViewComponent onCancelModalForm={onCancelModalForm} onSaveParameter={onSaveParameter} />}
    </>
  );
};

const BillingTypeViewComponent: FC<ParametersFormViewProps> = ({ onCancelModalForm, onSaveParameter }) => {
  const { t } = useTranslation();
  const { serviceTypes } = useDataMastersManagement();
  const theme = useTheme();
  const form = useForm<BillingModels.ParameterBillingTypeInterface>({
    defaultValues: ParameterBillingTypeFormInitialValue,
  });
  const {
    control,
    formState: { errors, isValid },
  } = form;
  return (
    <form>
      <Grid container sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <TextField
            name="code"
            label={t('billing.maintenance.parameterManagement.codeFormLabel')}
            errors={errors}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            control={control}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            name="description"
            label={t('billing.maintenance.parameterManagement.descriptionFormLabel')}
            errors={errors}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            control={control}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Select
            name="serviceTypeId"
            label={t('billing.maintenance.parameterManagement.serviceTypeFormLabel')}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            control={control}
            errors={errors}
            options={serviceTypes}
            keyLabel="name"
            keyValue="id"
          />
        </Grid>
        <Grid container justifyContent="flex-end">
          <Grid item xs={12} sx={{ mt: 3, mb: 3 }}>
            <Box sx={{ borderBottom: `1px solid ${theme.currentTheme.palette.common.wrapperFormHLineBgSecondary}` }}></Box>
          </Grid>
          <Box sx={{ pr: 2 }}>
            <Button type="button" variant="contained" buttonType="cancel" onClick={onCancelModalForm}>
              {t('billing.maintenance.parameterManagement.cancelButtonLabel')}
            </Button>
          </Box>
          <Box>
            <Button
              type="button"
              variant="contained"
              buttonType="save"
              disabled={!isValid}
              onClick={() => onSaveParameter(ParametersConfigTypeEnum.BillingType, form.getValues())}
            >
              {t('billing.maintenance.parameterManagement.saveButtonLabel')}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

const ChargeTypeViewComponent: FC<ParametersFormViewProps> = ({ onCancelModalForm, onSaveParameter }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { serviceTypes } = useDataMastersManagement();
  const form = useForm<BillingModels.ParameterChargeTypeInterface>({
    defaultValues: ParameterChargeTypeFormInitialValue,
  });
  const {
    control,
    formState: { errors, isValid },
  } = form;
  return (
    <form>
      <Grid container sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <TextField
            name="code"
            label={t('billing.maintenance.parameterManagement.codeFormLabel')}
            errors={errors}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            control={control}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            name="description"
            label={t('billing.maintenance.parameterManagement.descriptionFormLabel')}
            errors={errors}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            control={control}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Select
            name="serviceTypeId"
            label={t('billing.maintenance.parameterManagement.serviceTypeFormLabel')}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            control={control}
            options={serviceTypes}
            errors={errors}
            keyLabel="name"
            keyValue="id"
          />
        </Grid>
        <Grid container justifyContent="flex-end">
          <Grid item xs={12} sx={{ mt: 3, mb: 3 }}>
            <Box sx={{ borderBottom: `1px solid ${theme.currentTheme.palette.common.wrapperFormHLineBgSecondary}` }}></Box>
          </Grid>
          <Box sx={{ pr: 2 }}>
            <Button type="button" variant="contained" buttonType="cancel" onClick={onCancelModalForm}>
              {t('billing.maintenance.parameterManagement.cancelButtonLabel')}
            </Button>
          </Box>
          <Box>
            <Button
              type="button"
              variant="contained"
              buttonType="save"
              disabled={!isValid}
              onClick={() => onSaveParameter(ParametersConfigTypeEnum.ChargeType, form.getValues())}
            >
              {t('billing.maintenance.parameterManagement.saveButtonLabel')}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

const CalculationTypeViewComponent: FC<ParametersFormViewProps> = ({ onCancelModalForm, onSaveParameter }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { serviceTypes } = useDataMastersManagement();
  const form = useForm<BillingModels.ParameterCalculationTypeInterface>({
    defaultValues: ParameterBillingModeFormInitialValue,
  });
  const {
    control,
    formState: { errors, isValid },
  } = form;
  return (
    <form>
      <Grid container sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <TextField
            name="code"
            label={t('billing.maintenance.parameterManagement.codeFormLabel')}
            errors={errors}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            control={control}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            name="description"
            label={t('billing.maintenance.parameterManagement.descriptionFormLabel')}
            errors={errors}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            control={control}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Select
            name="serviceTypeId"
            label={t('billing.maintenance.parameterManagement.serviceTypeFormLabel')}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            control={control}
            options={serviceTypes}
            errors={errors}
            keyLabel="name"
            keyValue="id"
          />
        </Grid>
        <Grid container justifyContent="flex-end">
          <Grid item xs={12} sx={{ mt: 3, mb: 3 }}>
            <Box sx={{ borderBottom: `1px solid ${theme.currentTheme.palette.common.wrapperFormHLineBgSecondary}` }}></Box>
          </Grid>
          <Box sx={{ pr: 2 }}>
            <Button type="button" variant="contained" buttonType="cancel" onClick={onCancelModalForm}>
              {t('billing.maintenance.parameterManagement.cancelButtonLabel')}
            </Button>
          </Box>
          <Box>
            <Button
              type="button"
              variant="contained"
              buttonType="save"
              disabled={!isValid}
              onClick={() => onSaveParameter(ParametersConfigTypeEnum.CalculationType, form.getValues())}
            >
              {t('billing.maintenance.parameterManagement.saveButtonLabel')}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

const BillingModeViewComponent: FC<ParametersFormViewProps> = ({ onCancelModalForm, onSaveParameter }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { serviceTypes } = useDataMastersManagement();
  const form = useForm<BillingModels.ParameterBillingModeInterface>({
    defaultValues: ParameterBillingModeFormInitialValue,
  });
  const {
    control,
    formState: { errors, isValid },
  } = form;
  return (
    <form>
      <Grid container sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <TextField
            name="code"
            label={t('billing.maintenance.parameterManagement.codeFormLabel')}
            errors={errors}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            control={control}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            name="description"
            label={t('billing.maintenance.parameterManagement.descriptionFormLabel')}
            errors={errors}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            control={control}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Select
            name="serviceTypeId"
            label={t('billing.maintenance.parameterManagement.serviceTypeFormLabel')}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            control={control}
            options={serviceTypes}
            errors={errors}
            keyLabel="name"
            keyValue="id"
          />
        </Grid>
        <Grid container justifyContent="flex-end">
          <Grid item xs={12} sx={{ mt: 3, mb: 3 }}>
            <Box sx={{ borderBottom: `1px solid ${theme.currentTheme.palette.common.wrapperFormHLineBgSecondary}` }}></Box>
          </Grid>
          <Box sx={{ pr: 2 }}>
            <Button type="button" variant="contained" buttonType="cancel" onClick={onCancelModalForm}>
              {t('billing.maintenance.parameterManagement.cancelButtonLabel')}
            </Button>
          </Box>
          <Box>
            <Button
              type="button"
              variant="contained"
              buttonType="save"
              disabled={!isValid}
              onClick={() => onSaveParameter(ParametersConfigTypeEnum.BillingMode, form.getValues())}
            >
              {t('billing.maintenance.parameterManagement.saveButtonLabel')}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

export {
  ChargeTypeViewComponent,
  BillingModeViewComponent,
  CalculationTypeViewComponent,
  NatureConceptViewComponent,
  TaxesViewComponent,
  UnitsMeasureViewComponent,
  CalculationMethodViewComponent,
  ServiceGroupViewComponent,
  AverageBillingViewComponent,
  BillingTypeViewComponent,
};
