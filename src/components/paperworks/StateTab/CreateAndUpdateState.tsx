import React, { FC, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Grid } from '@mui/material';
import { TextField, Checkbox, Select, Button, Divider, AlertResultModalComponent } from '@/components';
import { useTranslation } from '@/hooks';
import { usePaperworks } from '@/context';
import { ModalConfiguration } from '@/models/commons';
import { SuccessIcon, AdvertenceIcon } from '@/assets';

interface FormValues {
  stateId: string;
  name: string;
  taskId: string;
  workOrderId: string;
  reportId: string;
  isStartingStage: boolean;
  isEndingStage: boolean;
  isBrigadeRequired: boolean;
  isObservationsRequired: boolean;
  isReportEmiting: boolean;
  isRequiredWorkOrder: boolean;
  isWorkOrderCompletionRequired: boolean;
}

interface CreateAndUpdateStateProps {
  initialValues?: FormValues;
  isStateEdit?: boolean;
  handleCancel?: () => void;
}

const DEFAULT_FORM_VALUES: FormValues = {
  stateId: '',
  name: '',
  taskId: '',
  workOrderId: '',
  reportId: '',
  isStartingStage: false,
  isEndingStage: false,
  isBrigadeRequired: false,
  isObservationsRequired: false,
  isReportEmiting: false,
  isRequiredWorkOrder: false,
  isWorkOrderCompletionRequired: false,
};

export const CreateAndUpdateState: FC<CreateAndUpdateStateProps> = ({ initialValues, isStateEdit, handleCancel }) => {
  const { statesActions, stateById, catalogTasks, catalogWoTypes, catalogStates, catalogReports, idPaperwork } = usePaperworks();
  const [openAlertModal, setOpenAlertModal] = useState<boolean>(false);
  const [alertModalConfig, setAlertModalConfig] = useState<ModalConfiguration>({
    buttonText: '',
    icon: SuccessIcon,
    message: '',
    modalTitle: '',
  });
  const { t } = useTranslation();

  const { control, handleSubmit, formState, reset, watch } = useForm<FormValues>({
    defaultValues: initialValues || DEFAULT_FORM_VALUES,
  });

  const isReportEmitingChecked = watch('isReportEmiting');

  const { errors } = formState;

  const onSubmitForm: SubmitHandler<FormValues> = async (data) => {
    if (isStateEdit) {
      const resp = await statesActions?.updateState({
        ...data,
        id: stateById.id,
        procedureId: idPaperwork,
        order: stateById.order,
        procedureStage: stateById.stageId,
      });
      if (resp?.success) {
        setAlertModalConfig({
          buttonText: t('paperworks.alertResultModal.acceptButtonLabel', { entityName: t('paperworks.stateTab.entityName') }),
          icon: SuccessIcon,
          message: t('paperworks.alertResultModal.updateSuccessLabel', { entityName: t('paperworks.stateTab.entityName') }),
          modalTitle: t('paperworks.alertResultModal.updateSuccessModalTitle', { entityName: t('paperworks.stateTab.entityName') }),
        });
      } else {
        let message = t('paperworks.alertResultModal.updateErrorLabel', { entityName: t('paperworks.stateTab.entityName') });
        if (resp?.message?.includes('already exists')) {
          message = `${t('paperworks.alertResultModal.updateErrorLabel', {
            entityName: t('paperworks.stateTab.entityName'),
          })} <strong>${t('paperworks.stateTab.errorStateCodeAlreadySelected')}</strong>`;
        }
        setAlertModalConfig({
          buttonText: t('paperworks.alertResultModal.acceptButtonLabel', { entityName: t('paperworks.stateTab.entityName') }),
          icon: AdvertenceIcon,
          message,
          modalTitle: t('paperworks.alertResultModal.updateErrorModalTitle', { entityName: t('paperworks.stateTab.entityName') }),
        });
      }
    } else {
      const resp = await statesActions?.createState({ ...data, procedureId: idPaperwork });
      if (resp?.success) {
        setAlertModalConfig({
          buttonText: t('paperworks.alertResultModal.acceptButtonLabel', { entityName: t('paperworks.stateTab.entityName') }),
          icon: SuccessIcon,
          message: t('paperworks.alertResultModal.createSuccessLabel', { entityName: t('paperworks.stateTab.entityName') }),
          modalTitle: t('paperworks.alertResultModal.createSuccessModalTitle', { entityName: t('paperworks.stateTab.entityName') }),
        });
        reset(DEFAULT_FORM_VALUES);
      } else {
        let message = t('paperworks.alertResultModal.createErrorLabel', { entityName: t('paperworks.stateTab.entityName') });
        if (resp?.message?.includes('already exists')) {
          message = `${t('paperworks.alertResultModal.createErrorLabel', {
            entityName: t('paperworks.stateTab.entityName'),
          })} <strong>${t('paperworks.stateTab.errorStateCodeAlreadySelected')}</strong>`;
        }
        setAlertModalConfig({
          buttonText: t('paperworks.alertResultModal.acceptButtonLabel', { entityName: t('paperworks.stateTab.entityName') }),
          icon: AdvertenceIcon,
          message,
          modalTitle: t('paperworks.alertResultModal.createErrorModalTitle', { entityName: t('paperworks.stateTab.entityName') }),
        });
      }
    }
    setOpenAlertModal(true);
  };

  const onCancel = () => {
    reset();
    handleCancel && handleCancel();
  };

  useEffect(() => {
    if (isStateEdit) {
      reset({
        stateId: String(stateById.stageId),
        name: stateById.name,
        taskId: String(stateById.taskId),
        isRequiredWorkOrder: stateById.isRequiredWorkOrder,
        workOrderId: String(stateById.workOrderId),
        isWorkOrderCompletionRequired: stateById.isWorkOrderCompletionRequired,
        isStartingStage: stateById.isStartingStage,
        isBrigadeRequired: stateById.isBrigadeRequired,
        isReportEmiting: stateById.isReportEmiting,
        isEndingStage: stateById.isEndingStage,
        isObservationsRequired: stateById.isObservationsRequired,
        reportId: String(stateById.reportId),
      });
    } else {
      reset(DEFAULT_FORM_VALUES);
    }
  }, [isStateEdit, stateById]);

  const onCloseAlertModal = () => setOpenAlertModal(false);

  return (
    <>
      <AlertResultModalComponent modalConfiguration={alertModalConfig} onClose={onCloseAlertModal} openModal={openAlertModal} />
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ marginBottom: '30px' }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Select
                  name="stateId"
                  label={t('paperworks.createState.fieldCode')}
                  rules={{ required: t('paperworks.errors.requiredField') }}
                  control={control}
                  options={catalogStates}
                  errors={errors}
                  keyLabel="name"
                  keyValue="id"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField name="name" label="Nombre" rules={{ required: t('paperworks.errors.requiredField') }} control={control} errors={errors} />
              </Grid>
              <Grid item xs={6}>
                <Select
                  name="taskId"
                  label={t('paperworks.createState.fieldTask')}
                  rules={{ required: t('paperworks.errors.requiredField') }}
                  control={control}
                  options={catalogTasks}
                  errors={errors}
                  keyLabel="name"
                  keyValue="id"
                />
              </Grid>
            </Grid>
          </Grid>
          <Divider />
          <Grid item xs={12} sx={{ marginBottom: '30px', marginTop: '30px' }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Checkbox name="isRequiredWorkOrder" label={t('paperworks.createState.fieldGenerateWO')} control={control} errors={errors} />
              </Grid>
              {statesActions?.isWOType() && (
                <>
                  <Grid item xs={6}>
                    <Select
                      name="workOrderId"
                      label={t('paperworks.createState.fieldTypeWO')}
                      control={control}
                      options={catalogWoTypes}
                      errors={errors}
                      keyLabel="name"
                      keyValue="id"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Checkbox
                      name="isWorkOrderCompletionRequired"
                      label={t('paperworks.createState.fieldWaitEndWO')}
                      control={control}
                      errors={errors}
                    />
                  </Grid>
                </>
              )}
              <Grid item xs={6}>
                <Checkbox name="isStartingStage" label={t('paperworks.createState.fieldStartPaperwork')} control={control} errors={errors} />
              </Grid>
              <Grid item xs={6}>
                <Checkbox name="isBrigadeRequired" label={t('paperworks.createState.fieldBrigade')} control={control} errors={errors} />
              </Grid>
              <Grid item xs={6}>
                <Checkbox name="isReportEmiting" label={t('paperworks.createState.fieldReport')} control={control} errors={errors} />
              </Grid>
              <Grid item xs={6}>
                <Checkbox name="isEndingStage" label={t('paperworks.createState.fieldEndPaperwork')} control={control} errors={errors} />
              </Grid>
              {isReportEmitingChecked && (
                <Grid item xs={6}>
                  <Select
                    name="reportId"
                    label={t('paperworks.createState.fieldReportOptions')}
                    rules={{ required: t('paperworks.errors.requiredField') }}
                    control={control}
                    options={catalogReports}
                    errors={errors}
                    keyLabel="name"
                    keyValue="id"
                  />
                </Grid>
              )}
              <Grid item xs={6}>
                <Checkbox name="isObservationsRequired" label={t('paperworks.createState.fieldObservations')} control={control} errors={errors} />
              </Grid>
            </Grid>
          </Grid>
          <Divider />
          <Grid item xs={12}>
            <Grid container spacing={2} justifyContent="flex-end">
              <Grid item>
                <Button buttonType="cancel" onClick={onCancel}>
                  {t('paperworks.btnCancel')}
                </Button>
              </Grid>
              <Grid item>
                <Button type="submit">{isStateEdit ? t('paperworks.btnUpdate') : t('paperworks.btnCreate')}</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
