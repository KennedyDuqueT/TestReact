import React, { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Grid } from '@mui/material';
import { Select, NumberField, TextArea, Button, TextField, AlertResultModalComponent } from '@/components';
import { usePaperworks } from '@/context';
import { useTranslation } from '@/hooks';
import { SuccessIcon, AdvertenceIcon } from '@/assets';
import { ModalConfiguration } from '@/models/commons';
import { useRouter } from 'next/router';

interface FormValues {
  id: number;
  shortName: string;
  typePaperwork: string;
  priority: string;
  requiredUserSupply: string;
  days: string;
  hours: string;
  minutes: string;
  description: string;
}

interface GeneralTabProps {
  initialValues?: FormValues;
}

export const GeneralTab: FC<GeneralTabProps> = ({ initialValues }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { id } = router.query;
  const { editData, editMode, generalActions, catalogPriority, catalogUserSupply, catalogPaperworkTypes } = usePaperworks();
  const [openAlertModal, setOpenAlertModal] = useState<boolean>(false);
  const [alertModalConfig, setAlertModalConfig] = useState<ModalConfiguration>({
    buttonText: '',
    icon: SuccessIcon,
    message: '',
    modalTitle: '',
  });

  const { control, handleSubmit, formState, reset } = useForm<FormValues>({
    defaultValues: initialValues || {
      id: 0,
      shortName: '',
      typePaperwork: '',
      priority: '',
      requiredUserSupply: '',
      days: '',
      hours: '',
      minutes: '',
      description: '',
    },
  });

  const { errors } = formState;

  const handleSendRequest = async (data: any) => {
    if (editMode) {
      const updatePaperwork = await generalActions?.updatePaperwork(data);
      if (updatePaperwork?.success) {
        setAlertModalConfig({
          buttonText: t('paperworks.generalTab.alertResultModal.acceptButtonLabel'),
          icon: SuccessIcon,
          message: t('paperworks.generalTab.alertResultModal.updateSuccessLabel'),
          modalTitle: t('paperworks.generalTab.alertResultModal.updateSuccessModalTitle'),
        });
      } else {
        setAlertModalConfig({
          buttonText: t('paperworks.generalTab.alertResultModal.acceptButtonLabel'),
          icon: AdvertenceIcon,
          message: t('paperworks.generalTab.alertResultModal.updateErrorLabel'),
          modalTitle: t('paperworks.generalTab.alertResultModal.updateErrorModalTitle'),
        });
      }
      setOpenAlertModal(true);
    } else {
      const createPaperwork = await generalActions?.createPaperwork(data);
      if (createPaperwork?.success) {
        setAlertModalConfig({
          buttonText: t('paperworks.generalTab.alertResultModal.acceptButtonLabel'),
          icon: SuccessIcon,
          message: t('paperworks.generalTab.alertResultModal.createSuccessLabel'),
          modalTitle: t('paperworks.generalTab.alertResultModal.createSuccessModalTitle'),
        });
      } else {
        setAlertModalConfig({
          buttonText: t('paperworks.generalTab.alertResultModal.acceptButtonLabel'),
          icon: AdvertenceIcon,
          message: t('paperworks.generalTab.alertResultModal.createErrorLabel'),
          modalTitle: t('paperworks.generalTab.alertResultModal.createErrorModalTitle'),
        });
      }
      setOpenAlertModal(true);
    }
  };

  useEffect(() => {
    if (editMode) {
      reset({
        id: Number(id),
        shortName: String(editData.shortName),
        typePaperwork: String(editData.procedureTypeId),
        priority: String(editData.priorityId),
        requiredUserSupply: String(editData.requiredUserSupply),
        days: String(editData.days),
        hours: String(editData.hours),
        minutes: String(editData.minutes),
        description: editData.description,
      });
    }
  }, [editData]);

  const onCloseAlertModal = () => setOpenAlertModal(false);

  return (
    <>
      <AlertResultModalComponent modalConfiguration={alertModalConfig} onClose={onCloseAlertModal} openModal={openAlertModal} />
      <Box sx={{ my: 4 }}>
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <TextField
                  name="shortName"
                  label={t('paperworks.generalTab.fieldShortName')}
                  rules={{
                    required: t('paperworks.errors.requiredField'),
                  }}
                  control={control}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={12}>
                <Select
                  name="typePaperwork"
                  label={t('paperworks.generalTab.fieldTypePaperwork')}
                  rules={{
                    required: t('paperworks.errors.requiredField'),
                  }}
                  disabled={editMode}
                  options={catalogPaperworkTypes}
                  control={control}
                  errors={errors}
                  keyLabel="name"
                  keyValue="id"
                />
              </Grid>
              <Grid item xs={12}>
                <Select
                  name="priority"
                  label={t('paperworks.generalTab.fieldPriority')}
                  rules={{
                    required: t('paperworks.errors.requiredField'),
                  }}
                  options={catalogPriority}
                  control={control}
                  errors={errors}
                  keyLabel="name"
                  keyValue="id"
                />
              </Grid>
              <Grid item xs={12}>
                <Select
                  name="requiredUserSupply"
                  label={t('paperworks.generalTab.fieldRequiredUserSupply')}
                  rules={{
                    required: t('paperworks.errors.requiredField'),
                  }}
                  options={catalogUserSupply}
                  control={control}
                  errors={errors}
                  keyLabel="name"
                  keyValue="id"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={5}>
              <Grid container item xs={12} spacing={2}>
                <Grid item xs={4}>
                  <NumberField
                    name="days"
                    label={t('paperworks.generalTab.fieldDays')}
                    rules={{
                      required: t('paperworks.errors.requiredField'),
                      min: {
                        value: 0,
                        message: t('paperworks.generalTab.validations.minimumValue'),
                      },
                    }}
                    control={control}
                    errors={errors}
                    min={0}
                  />
                </Grid>
                <Grid item xs={4}>
                  <NumberField
                    name="hours"
                    label={t('paperworks.generalTab.fieldHours')}
                    rules={{
                      required: t('paperworks.errors.requiredField'),
                      min: {
                        value: 0,
                        message: t('paperworks.generalTab.validations.minimumValue'),
                      },
                    }}
                    control={control}
                    errors={errors}
                    min={0}
                  />
                </Grid>
                <Grid item xs={4}>
                  <NumberField
                    name="minutes"
                    label={t('paperworks.generalTab.fieldMinutes')}
                    rules={{
                      required: t('paperworks.errors.requiredField'),
                      min: {
                        value: 0,
                        message: t('paperworks.generalTab.validations.minimumValue'),
                      },
                    }}
                    control={control}
                    errors={errors}
                    min={0}
                  />
                </Grid>
              </Grid>
              <Grid container item xs={12}>
                <TextArea
                  name="description"
                  label={t('paperworks.generalTab.fieldDescription')}
                  rows={7}
                  rules={{ required: t('paperworks.errors.requiredField') }}
                  control={control}
                  errors={errors}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'right', marginTop: 3, gap: 2, paddingRight: 2 }}>
          <Button type="submit" onClick={handleSubmit(handleSendRequest)}>
            {editMode ? t('paperworks.btnUpdate') : t('paperworks.btnSave')}
          </Button>
        </Box>
      </Box>
    </>
  );
};
