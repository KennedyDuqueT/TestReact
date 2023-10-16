import React, { useState, FC, useEffect } from 'react';
import { Grid } from '@mui/material';
import { Select, TextField, Button, Modal, Table, ConfirmDialog, AlertResultModalComponent } from '@/components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CreateAndUpdateState } from './CreateAndUpdateState';
import { GridColDef } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from '@/hooks';
import { usePaperworks } from '@/context';
import { ModalConfiguration } from '@/models/commons';
import { AdvertenceIcon, SuccessIcon } from '@/assets';

interface FormValues {
  code: string;
  name: string;
  start: string;
  end: string;
  task: string;
}

interface StateTabProps {
  initialValues?: FormValues;
}

export const StateTab: FC<StateTabProps> = ({ initialValues }) => {
  const { statesActions, stateList, catalogTasks, idPaperwork } = usePaperworks();
  const { t } = useTranslation();
  const [openAlertModal, setOpenAlertModal] = useState<boolean>(false);
  const [openConfirmDeleteModal, setOpenConfirmDeleteModal] = useState<boolean>(false);
  const [idToDelete, setIdToDelete] = useState<number>(-1);
  const [alertModalConfig, setAlertModalConfig] = useState<ModalConfiguration>({
    buttonText: '',
    icon: SuccessIcon,
    message: '',
    modalTitle: '',
  });

  const { control, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: initialValues || {
      code: '',
      name: '',
      start: '',
      end: '',
      task: '',
    },
  });

  const { errors } = formState;

  const columns: GridColDef[] = [
    { field: 'code', headerName: t('paperworks.stateTab.column1Title'), width: 150 },
    { field: 'name', headerName: t('paperworks.stateTab.column2Title'), width: 250 },
    { field: 'start', headerName: t('paperworks.stateTab.column3Title'), width: 120 },
    { field: 'end', headerName: t('paperworks.stateTab.column4Title'), width: 120 },
    { field: 'task', headerName: t('paperworks.stateTab.column5Title'), width: 250 },
  ];

  const [openModalCreateState, setOpenModalCreateState] = useState<boolean>(false);
  const [isStateEdit, setIsStateEdit] = useState<boolean>(false);

  const onSubmitForm: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  const stateListData = stateList.map((item: any) => ({
    id: item.id,
    code: String(item.code),
    name: item.name,
    start: item.isStartingState ? t('paperworks.stateTab.startingYes') : t('paperworks.stateTab.startingNo'),
    end: item.isEndingState ? t('paperworks.stateTab.startingYes') : t('paperworks.stateTab.startingNo'),
    task: item.task.name,
  }));

  useEffect(() => {
    statesActions?.getStatesListById(idPaperwork);
    statesActions?.getStateCatalogs();
  }, []);

  const editState = async (id: number) => {
    const chargeEditData = await statesActions?.getStateDataById(id);
    if (chargeEditData?.success) {
      setIsStateEdit(true);
      setOpenModalCreateState(true);
    }
  };

  const createState = () => {
    setIsStateEdit(false);
    setOpenModalCreateState(true);
  };

  const closeModal = () => setOpenModalCreateState(false);

  const handleDeletePaperwork = async () => {
    setOpenConfirmDeleteModal(false);
    const deleteState = await statesActions?.deleteState(idToDelete);

    if (deleteState?.success) {
      setAlertModalConfig({
        buttonText: t('paperworks.alertResultModal.acceptButtonLabel', { entityName: t('paperworks.stateTab.entityName') }),
        icon: SuccessIcon,
        message: t('paperworks.alertResultModal.deleteSuccessLabel', { entityName: t('paperworks.stateTab.entityName') }),
        modalTitle: t('paperworks.alertResultModal.deleteSuccessModalTitle', { entityName: t('paperworks.stateTab.entityName') }),
      });
    } else {
      setAlertModalConfig({
        buttonText: t('paperworks.alertResultModal.acceptButtonLabel', { entityName: t('paperworks.stateTab.entityName') }),
        icon: AdvertenceIcon,
        message: t('paperworks.alertResultModal.deleteErrorLabel', { entityName: t('paperworks.stateTab.entityName') }),
        modalTitle: t('paperworks.alertResultModal.deleteErrorModalTitle', { entityName: t('paperworks.stateTab.entityName') }),
      });
    }
    setOpenAlertModal(true);
  };

  const confirmDeletion = (id: number) => {
    setIdToDelete(id);
    setOpenConfirmDeleteModal(true);
  };

  const cancelDeletion = () => setOpenConfirmDeleteModal(false);

  const onCloseAlertModal = () => setOpenAlertModal(false);

  return (
    <>
      <ConfirmDialog
        open={openConfirmDeleteModal}
        title={t('paperworks.alertResultModal.deleteConfirmationTitle', { entityName: t('paperworks.stateTab.entityName') })}
        message={t('paperworks.alertResultModal.deleteConfirmationMessage', { entityName: t('paperworks.stateTab.entityName') })}
        onConfirm={handleDeletePaperwork}
        onCancel={cancelDeletion}
      />
      <Modal
        title={!isStateEdit ? t('paperworks.stateTab.modalTitle') : t('paperworks.stateTab.modalTitleUpdate')}
        maxWidth="md"
        open={openModalCreateState}
        handleClose={closeModal}
        icon={<AddIcon />}
        paddingTop={40}
      >
        <CreateAndUpdateState isStateEdit={isStateEdit} handleCancel={closeModal} />
      </Modal>
      <AlertResultModalComponent modalConfiguration={alertModalConfig} onClose={onCloseAlertModal} openModal={openAlertModal} />
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} container justifyContent="flex-end">
            <Button buttonType="create" onClick={createState}>
              {t('paperworks.stateTab.btnCreateState')}
            </Button>
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              name="code"
              label={t('paperworks.stateTab.fieldCode')}
              rules={{ required: t('paperworks.errors.requiredField') }}
              control={control}
              errors={errors}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              name="name"
              label={t('paperworks.stateTab.fieldName')}
              rules={{ required: t('paperworks.errors.requiredField') }}
              control={control}
              errors={errors}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Select
              name="start"
              label={t('paperworks.stateTab.fieldStart')}
              rules={{ required: t('paperworks.errors.requiredField') }}
              control={control}
              options={[
                { label: 'No', value: '0' },
                { label: 'Si', value: '1' },
              ]}
              errors={errors}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Select
              name="end"
              label={t('paperworks.stateTab.fieldEnd')}
              rules={{ required: t('paperworks.errors.requiredField') }}
              control={control}
              options={[
                { label: 'No', value: '0' },
                { label: 'Si', value: '1' },
              ]}
              errors={errors}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Select
              name="task"
              label={t('paperworks.stateTab.fieldTask')}
              rules={{ required: t('paperworks.errors.requiredField') }}
              control={control}
              options={catalogTasks}
              errors={errors}
              keyLabel="name"
              keyValue="id"
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button buttonType="find" type="submit">
              {t('paperworks.stateTab.btnFilter')}
            </Button>
          </Grid>
        </Grid>
      </form>
      <Table
        title={t('paperworks.stateTab.tableTitle')}
        variant="secondary"
        columns={columns}
        rows={stateListData}
        onEdit={editState}
        onDelete={confirmDeletion}
      />
    </>
  );
};
