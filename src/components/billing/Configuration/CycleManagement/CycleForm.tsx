import { Select, TextField, WrapperForm } from '@/components/ui';
import { useTranslation } from '@/hooks';
import { Grid } from '@mui/material';
import { FC, LegacyRef } from 'react';
import { Control, FieldErrors, SubmitHandler, UseFormHandleSubmit } from 'react-hook-form';
import { BillingModels } from '@/models';
import { useDataMastersManagement } from '@/context/billing';

interface CycleFormProps {
  onCreateOrEdit: SubmitHandler<BillingModels.CycleInterface>;
  onOpenSearchModal: () => void;
  control: Control<BillingModels.CycleInterface, any>;
  errors: FieldErrors<BillingModels.CycleInterface>;
  handleSubmit: UseFormHandleSubmit<BillingModels.CycleInterface>;
  formRef?: LegacyRef<HTMLFormElement>;
}

const CycleFormComponent: FC<CycleFormProps> = ({ control, errors, handleSubmit, onOpenSearchModal, onCreateOrEdit, formRef }) => {
  const { t } = useTranslation();
  const { zones, frequencies, sectors, billingModes, serviceTypes } = useDataMastersManagement();

  return (
    <WrapperForm variant="secondary" title={t('billing.maintenance.cyclesManagement.cycleFormTitle')} onSearch={onOpenSearchModal}>
      <form ref={formRef} id="createOrEditFormCycle" onSubmit={handleSubmit(onCreateOrEdit)}>
        <Grid container sx={{ mt: 4 }}>
          <Grid item xs={6} sx={{ pl: 2, pr: 3 }}>
            <Grid item xs={12}>
              <TextField
                name="name"
                label={t('billing.maintenance.cyclesManagement.cycleCodeFormLabel')}
                errors={errors}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
              <TextField
                name="description"
                label={t('billing.maintenance.cyclesManagement.descriptionFormLabel')}
                errors={errors}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
              <Select
                name="sectorId"
                label={t('billing.maintenance.cyclesManagement.sectorFormLabel')}
                rules={{
                  required: t('formValidationsErrors.requiredErrorLabel'),
                }}
                control={control}
                options={sectors}
                errors={errors}
                keyLabel="name"
                keyValue="id"
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
              <Select
                name="zoneId"
                label={t('billing.maintenance.cyclesManagement.zoneFormLabel')}
                rules={{
                  required: t('formValidationsErrors.requiredErrorLabel'),
                }}
                control={control}
                options={zones}
                errors={errors}
                keyLabel="name"
                keyValue="id"
              />
            </Grid>
          </Grid>
          <Grid item xs={6} sx={{ pl: 3, pr: 2 }}>
            <Grid item xs={12}>
              <Select
                name="frequencyId"
                label={t('billing.maintenance.cyclesManagement.frequencyFormLabel')}
                rules={{
                  required: t('formValidationsErrors.requiredErrorLabel'),
                }}
                control={control}
                options={frequencies}
                errors={errors}
                keyLabel="name"
                keyValue="id"
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
              <Select
                name="serviceTypeId"
                label={t('billing.maintenance.cyclesManagement.serviceTypeFormLabel')}
                rules={{
                  required: t('formValidationsErrors.requiredErrorLabel'),
                }}
                control={control}
                options={serviceTypes}
                errors={errors}
                keyLabel="name"
                keyValue="id"
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
              <Select
                name="billingModeId"
                label={t('billing.maintenance.cyclesManagement.billingModeFormLabel')}
                rules={{
                  required: t('formValidationsErrors.requiredErrorLabel'),
                }}
                control={control}
                options={billingModes}
                errors={errors}
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

export default CycleFormComponent;
