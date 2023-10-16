import { Select, TextField, WrapperForm } from '@/components/ui';
import { useTranslation } from '@/hooks';
import { Grid } from '@mui/material';
import { FC, LegacyRef, useEffect } from 'react';
import { Control, FieldErrors, SubmitHandler, UseFormHandleSubmit, UseFormReturn } from 'react-hook-form';
import { BillingModels } from '@/models';
import { useDataMastersManagement, useRouteManagement } from '@/context/billing';

interface RouteFormProps {
  onCreateOrEdit: SubmitHandler<BillingModels.RouteInterface>;
  onOpenSearchModal: () => void;
  control: Control<BillingModels.RouteInterface, object>;
  errors: FieldErrors<BillingModels.RouteInterface>;
  handleSubmit: UseFormHandleSubmit<BillingModels.RouteInterface>;
  formRef?: LegacyRef<HTMLFormElement>;
  form: UseFormReturn<BillingModels.RouteInterface>;
}

const RouteFormComponent: FC<RouteFormProps> = ({ control, errors, handleSubmit, onOpenSearchModal, onCreateOrEdit, formRef, form }) => {
  const { t } = useTranslation();
  const { setValue } = form;
  const { cycles } = useRouteManagement();
  const { zones, frequencies, sectors, billingModes, serviceTypes } = useDataMastersManagement();

  useEffect(() => {
    const selectedCycleId = form.watch('cycleId');
    const selectedCycle = cycles.find((cycle) => cycle.id === selectedCycleId);
    if (selectedCycle) {
      setValue('sectorId', selectedCycle.sectorId);
      setValue('zoneId', selectedCycle.zoneId);
      setValue('frequencyId', selectedCycle.frequencyId);
      setValue('serviceTypeId', selectedCycle.serviceTypeId);
      setValue('billingModeId', selectedCycle.billingModeId);
    }
  }, [form.watch('cycleId')]);

  return (
    <WrapperForm variant="secondary" title={t('billing.maintenance.routesManagement.tabName')} onSearch={onOpenSearchModal}>
      <form ref={formRef} id="createOrEditFormRoute" onSubmit={handleSubmit(onCreateOrEdit)}>
        <Grid container sx={{ mt: 4 }}>
          <Grid item xs={6} sx={{ pl: 2, pr: 3 }}>
            <Grid item xs={12}>
              <TextField
                name="name"
                label={t('billing.maintenance.routesManagement.routeCodeTableLabel')}
                errors={errors}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
              <TextField
                name="description"
                label={t('billing.maintenance.routesManagement.descriptionTableLabel')}
                errors={errors}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
              <Select
                name="cycleId"
                label={t('billing.maintenance.routesManagement.cycleTableLabel')}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
                options={cycles}
                errors={errors}
                keyLabel="name"
                keyValue="id"
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
              <Select
                name="sectorId"
                label={t('billing.maintenance.routesManagement.sectorTableLabel')}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                errors={errors}
                control={control}
                disabled
                options={sectors}
                keyLabel="name"
                keyValue="id"
              />
            </Grid>
          </Grid>
          <Grid item xs={6} sx={{ pl: 3, pr: 2 }}>
            <Grid item xs={12}>
              <Select
                name="zoneId"
                label={t('billing.maintenance.routesManagement.zoneTableLabel')}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                errors={errors}
                control={control}
                disabled
                options={zones}
                keyLabel="name"
                keyValue="id"
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
              <Select
                name="frequencyId"
                label={t('billing.maintenance.routesManagement.frequencyLabel')}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                errors={errors}
                control={control}
                disabled
                options={frequencies}
                keyLabel="name"
                keyValue="id"
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
              <Select
                name="serviceTypeId"
                label={t('billing.maintenance.routesManagement.serviceTypeLabel')}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                errors={errors}
                control={control}
                disabled
                options={serviceTypes}
                keyLabel="name"
                keyValue="id"
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
              <Select
                name="billingModeId"
                label={t('billing.maintenance.routesManagement.billingModeLabel')}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                errors={errors}
                control={control}
                disabled
                options={billingModes}
                keyLabel="name"
                keyValue="id"
              />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </WrapperForm>
  );
};

export default RouteFormComponent;
