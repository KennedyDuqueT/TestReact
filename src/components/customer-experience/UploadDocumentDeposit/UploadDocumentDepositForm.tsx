import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Grid } from '@mui/material';
import { ModalConfiguration, ModalOptionsConfiguration } from '@/models/commons';
import { UploadDocumentDepositFormValues } from '@/models/customer-experience';
import { Button, Select, InputFile } from '@/components/ui';
import { useTranslation } from '@/hooks';
import { SuccessIcon, AdvertenceIcon } from '@/assets';

interface Props {
  onSubmit: (modalConfig: ModalOptionsConfiguration) => void;
  onFail: (modalConfig: ModalConfiguration) => void;
  uploadSucces: (modalConfig: ModalConfiguration) => void;
  onDone: () => void;
}

export const UploadDocumentDepositForm: FC<Props> = ({ onSubmit, onFail, uploadSucces, onDone }) => {
  const { t } = useTranslation();

  const optionsDigitalPayment = [
    { id: 1, name: t('customerExperience.contactReport.inProcess') },
    { id: 2, name: t('customerExperience.contactReport.decline') },
    { id: 3, name: t('customerExperience.contactReport.missingClient') },
    { id: 4, name: t('customerExperience.contactReport.systemError') },
    { id: 5, name: t('customerExperience.contactReport.cashInReview') },
  ];

  const form = useForm<UploadDocumentDepositFormValues>({});

  const {
    control,
    formState: { errors },
    watch,
  } = form;

  const handleCancel = () => {
    form.reset({});
    onFail({
      buttonText: t('customerExperience.contactReport.return'),
      icon: AdvertenceIcon,
      message: t('customerExperience.contactReport.noCanContinue'),
      modalTitle: t('customerExperience.contactReport.createOp'),
    });
  };

  const handleTransfer = () => {
    form.reset({});
    onFail({
      buttonText: t('customerExperience.contactReport.accept'),
      icon: SuccessIcon,
      message: t('customerExperience.contactReport.returnATCSuccess'),
      modalTitle: t('customerExperience.contactReport.createOp'),
    });
  };

  const onCreateOp = () => {
    onSubmit({
      buttonSucessText: t('customerExperience.changeContract.continue'),
      buttonCancelText: t('customerExperience.changeContract.cancel'),
      modalTitle: t('customerExperience.contactReport.digitalPayment'),
      message: t('customerExperience.contactReport.youCanChangeStatus'),
      input: (
        <Grid container mb={6} mt={3}>
          <Grid item xs={12}>
            <Select
              name="requestState"
              label={t('customerExperience.contactReport.requestState')}
              rules={{
                required: t('formValidationsErrors.requiredErrorLabel'),
              }}
              control={control}
              options={optionsDigitalPayment}
              errors={errors}
              keyValue="id"
              keyLabel="name"
            />
          </Grid>
        </Grid>
      ),
      onReset: () => form.reset({}),
      onSubmit: onDone,
    });
  };

  useEffect(() => {
    const subscription = watch((value) => {
      if (value.document) {
        uploadSucces({
          buttonText: t('customerExperience.contactReport.accept'),
          icon: SuccessIcon,
          message: t('customerExperience.contactReport.uploadSucces'),
          modalTitle: t('customerExperience.contactReport.uploadDocument'),
        });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <>
      <Grid container mt={5} mb={7}>
        <Grid item xs={5}>
          <Button variant="contained" buttonType="primary" width={'100%'}>
            {t('customerExperience.contactReport.viewReportDeposit')}
          </Button>
        </Grid>
        <Grid item xs={4} style={{ margin: '0 21px 0 58px' }}>
          <InputFile
            name="document"
            label={t('customerExperience.contactReport.uploadDocument')}
            errors={errors}
            control={control}
            type="file"
            buttonLabel={t('customerExperience.contactReport.load')}
            emptyFileLabel={t('customerExperience.contactReport.withoutFile')}
          />
        </Grid>

        <Grid item>
          <Button variant="contained" buttonType={control._formValues.document ? 'primary' : 'cancel'}>
            {t('customerExperience.contactReport.view')}
          </Button>
        </Grid>
      </Grid>

      <Box display="flex" width={1} justifyContent="flex-end" mt={4}>
        <Box display="flex" width={1} justifyContent="flex-end">
          <Button variant="contained" buttonType="cancel" onClick={handleCancel} style={{ marginRight: 24 }}>
            {t('customerExperience.changeContract.exit')}
          </Button>

          <Button variant="contained" buttonType="cancel" onClick={handleCancel}>
            {t('customerExperience.changeContract.transferProcess')}
          </Button>

          <Box sx={{ flex: 1 }} />

          <Button variant="contained" buttonType="abort" onClick={handleTransfer} style={{ marginRight: 24 }}>
            {t('customerExperience.changeContract.finishRequest')}
          </Button>

          <Button variant="contained" buttonType="primary" onClick={onCreateOp}>
            {t('customerExperience.changeContract.createOp')}
          </Button>
        </Box>
      </Box>
    </>
  );
};
