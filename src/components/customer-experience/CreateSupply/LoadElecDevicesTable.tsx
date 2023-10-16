import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Grid } from '@mui/material';
import { ModalConfiguration, ModalOptionsConfiguration } from '@/models/commons';
import { LoadElecDevicesTableValues, LoadElecDevicesTableInterface } from '@/models/customer-experience';
import { Button, Table, Select, TextField } from '@/components/ui';
import { useTranslation } from '@/hooks';
import { useApprovedTable, useTheme } from '@/context';
import { Edit, CancelRounded, MailOutline, LocalPrintshopOutlined } from '@mui/icons-material';
import { SuccessIcon, AdvertenceIcon } from '@/assets';

import { getColumnsConfiguration, loadElecDevicesTableInitialValue, dummyDevices } from './LoadElecDevicesTable.constants';

interface Props {
  onSubmit: (modalConfig: ModalConfiguration) => void;
  onAdd: (modalConfig: ModalOptionsConfiguration) => void;
  onClose: () => void;
}

export const LoadElecDevicesTable: FC<Props> = ({ onAdd, onClose, onSubmit }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { actions, elecDevices } = useApprovedTable();
  const [loadElecDevicesInfo, setLoadElecDevicesInfo] = useState([loadElecDevicesTableInitialValue]);

  const form = useForm<LoadElecDevicesTableValues>({});

  const {
    control,
    formState: { errors },
  } = form;

  const onAddDevice = () => {
    onAdd({
      buttonSucessText: t('customerExperience.approvedTable.add'),
      buttonCancelText: t('customerExperience.approvedTable.cancel'),
      modalTitle: t('customerExperience.approvedTable.addDevice'),
      input: (
        <Grid container mb={6} mt={3}>
          <Grid item xs={12}>
            <Select
              name="typeElectrical"
              label={t('customerExperience.approvedTable.typeElectrical')}
              rules={{
                required: t('formValidationsErrors.requiredErrorLabel'),
              }}
              control={control}
              options={dummyDevices}
              errors={errors}
              keyValue="id"
              keyLabel="name"
            />
          </Grid>

          <Grid item xs={12} mt={5}>
            <TextField name="amountEquipment" label={t('customerExperience.approvedTable.amountEquipment')} errors={errors} control={control} />
          </Grid>
        </Grid>
      ),
      onReset: () => {
        form.reset({});
        onClose();
      },
      onSubmit: (callback) => {
        if (control._formValues.amountEquipment && control._formValues.typeElectrical) {
          if (callback) {
            callback();
          }
          addElecDevice({
            id: `ID 11011 ${control._formValues.amountEquipment}`,
            equipmentId: `ID 11011 ${control._formValues.amountEquipment}`,
            typeElectrical: String(dummyDevices.find((value) => value.id === control._formValues.typeElectrical)?.name),
            nominalPower: '0',
            amountEquipment: control._formValues.amountEquipment,
            kwhPeriod: '0',
            estimatedKwh: '0',
          });
          onSubmit({
            buttonText: t('components.alertResultModal.acceptButtonLabel'),
            icon: SuccessIcon,
            message: t('customerExperience.approvedTable.registerCreated'),
            modalTitle: t('customerExperience.approvedTable.deviceAdded'),
          });
          form.reset({});
        }
      },
    });
  };

  const onEditDevice = (id: number) => {
    const currentData = elecDevices.find((value) => value.id === id);
    form.setValue('typeElectrical', String(currentData?.typeElectrical));
    form.setValue('amountEquipment', String(currentData?.amountEquipment));

    onAdd({
      buttonSucessText: t('customerExperience.approvedTable.save'),
      buttonCancelText: t('customerExperience.approvedTable.cancel'),
      modalTitle: t('customerExperience.approvedTable.editDevice'),
      input: (
        <Grid container mb={6} mt={3}>
          <Grid item xs={12}>
            <Select
              name="typeElectrical"
              label={t('customerExperience.approvedTable.typeElectrical')}
              rules={{
                required: t('formValidationsErrors.requiredErrorLabel'),
              }}
              control={control}
              options={dummyDevices}
              errors={errors}
              keyValue="id"
              keyLabel="name"
            />
          </Grid>

          <Grid item xs={12} mt={5}>
            <TextField name="amountEquipment" label={t('customerExperience.approvedTable.amountEquipment')} errors={errors} control={control} />
          </Grid>
        </Grid>
      ),
      onReset: () => {
        form.reset({});
        onClose();
      },
      onSubmit: (callback) => {
        if (control._formValues.amountEquipment && control._formValues.typeElectrical) {
          if (callback) {
            callback();
          }
          editElecDevice({
            id: id,
            equipmentId: id,
            typeElectrical: String(dummyDevices.find((value) => value.id === control._formValues.typeElectrical)?.name),
            nominalPower: String(currentData?.nominalPower),
            amountEquipment: control._formValues.amountEquipment,
            kwhPeriod: String(currentData?.kwhPeriod),
            estimatedKwh: String(currentData?.estimatedKwh),
          });
          onSubmit({
            buttonText: t('components.alertResultModal.acceptButtonLabel'),
            icon: SuccessIcon,
            message: t('customerExperience.approvedTable.changesHaveSaved', { id }),
            modalTitle: t('customerExperience.approvedTable.changesSaved'),
          });
          form.reset({});
        }
      },
    });
  };

  const onRemoveDevice = (id: number) => {
    onAdd({
      buttonSucessText: t('customerExperience.approvedTable.delete'),
      buttonCancelText: t('customerExperience.approvedTable.cancel'),
      modalTitle: t('customerExperience.approvedTable.deleteDevice'),
      message: t('customerExperience.approvedTable.areSureDelete', { id }),
      icon: AdvertenceIcon,
      onReset: () => {
        onClose();
      },
      onSubmit: (callback) => {
        if (callback) {
          callback();
        }
        removeElecDevice(id);
        onSubmit({
          buttonText: t('components.alertResultModal.acceptButtonLabel'),
          icon: SuccessIcon,
          message: t('customerExperience.approvedTable.deviceHasDeteled', { id }),
          modalTitle: t('customerExperience.approvedTable.deletedDevice'),
        });
      },
    });
  };

  const customActions = [
    {
      tooltip: t('customerExperience.approvedTable.edit'),
      icon: <Edit style={{ color: theme.currentTheme.palette.common.tableBtnEdit }} />,
      onClick: onEditDevice,
    },
    {
      tooltip: t('customerExperience.approvedTable.print'),
      icon: <LocalPrintshopOutlined style={{ color: theme.currentTheme.palette.common.tableBtnEdit }} />,
      onClick: () => {
        console.log('print');
      },
    },
    {
      tooltip: t('customerExperience.approvedTable.send'),
      icon: <MailOutline style={{ color: theme.currentTheme.palette.common.tableBtnEdit }} />,
      onClick: () => {
        console.log('send');
      },
    },
    {
      tooltip: t('customerExperience.approvedTable.delete'),
      icon: <CancelRounded style={{ color: 'black' }} />,
      onClick: onRemoveDevice,
    },
  ];

  const removeElecDevice = async (data: number) => {
    await actions?.removeElecDeviceRequest(data);
  };

  const editElecDevice = async (data: LoadElecDevicesTableInterface) => {
    await actions?.editElecDeviceRequest(data);
  };

  const addElecDevice = async (data: LoadElecDevicesTableInterface) => {
    await actions?.addElecDeviceRequest(data);
  };

  const onSearchElecDevices = () => {
    actions?.getAllElecDevicesRequest();
  };

  useEffect(() => {
    setLoadElecDevicesInfo(elecDevices);
  }, [elecDevices]);

  useEffect(() => {
    onSearchElecDevices();
  }, []);

  return (
    <>
      <Grid container mt={-3} mx={-3} width={'calc(100% + 48px)'}>
        <Grid item xs={12}>
          <Box maxHeight="400px" overflow="auto">
            <Table
              title={t('customerExperience.approvedTable.loadElecDevices')}
              variant="secondary"
              columns={getColumnsConfiguration(t)}
              multiselect
              rows={loadElecDevicesInfo}
              onRowSelectionChange={() => {
                // setSelectedGenerateBillingArchive(rowSelection as number[]);
                // setIsButtonEnabled(rowSelection.length > 0);
              }}
              customActions={customActions}
            />
          </Box>
        </Grid>
        <Grid container justifyContent="flex-end" item xs={12} mt={2}>
          <Box pr={5}>
            <Button type="button" variant="contained" buttonType="save" onClick={onAddDevice}>
              {t('customerExperience.approvedTable.addDevice')}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
