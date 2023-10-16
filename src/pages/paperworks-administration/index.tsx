import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Grid } from '@mui/material';
import { Select, TextField, Button, WrapperForm, Table, AlertResultModalComponent, ConfirmDialog } from '@/components';
import styles from '@/styles/PaperworksAdministration.module.scss';
import { GridColDef } from '@mui/x-data-grid';
import { MainLayout } from '@/layouts';
import { usePaperworks } from '@/context';
import { useTranslation } from '@/hooks';
import { AdvertenceIcon, SuccessIcon } from '@/assets';
import { ModalConfiguration } from '@/models/commons';
import { PaperworksFilters } from '@/models/paperworks';

const PaperworksAdministration: FC = () => {
  const { catalogPaperworkTypes, paperworksList, actions, homeActions, generalActions, papeworksTotalRows } = usePaperworks();
  const { t } = useTranslation();
  const [openAlertModal, setOpenAlertModal] = useState<boolean>(false);
  const [openConfirmDeleteModal, setOpenConfirmDeleteModal] = useState<boolean>(false);
  const [updateList, setUpdateList] = useState<boolean>(false);
  const [alertModalConfig, setAlertModalConfig] = useState<ModalConfiguration>({
    buttonText: '',
    icon: SuccessIcon,
    message: '',
    modalTitle: '',
  });
  const [idToDelete, setIdToDelete] = useState<number>(-1);

  const { control, handleSubmit, formState } = useForm<PaperworksFilters>({
    defaultValues: {
      id: '',
      procedureTypeId: '',
      shortName: '',
    },
  });

  const { errors } = formState;

  const handleApplyFilters: SubmitHandler<PaperworksFilters> = (filters) => {
    homeActions?.applyFilters(filters);
  };

  const columns: GridColDef[] = [
    { field: 'type', headerName: t('paperworks.paperworksListTable.column1'), width: 250 },
    { field: 'code', headerName: t('paperworks.paperworksListTable.column2'), width: 250 },
    { field: 'shortName', headerName: t('paperworks.paperworksListTable.column3'), width: 250 },
    { field: 'description', headerName: t('paperworks.paperworksListTable.column4'), width: 250 },
  ];

  const router = useRouter();

  const handleCreateButtonClick = () => {
    actions?.setIsPaperworkEditMode(false);
    router.push('/paperworks-administration/create');
  };

  const handleEditPaperwork = (id: string | number) => {
    actions?.setIsPaperworkEditMode(true);
    router.push(`/paperworks-administration/edit?id=${id}`);
  };

  const handleDeletePaperwork = async () => {
    setOpenConfirmDeleteModal(false);
    const deletePaperwork = await generalActions?.deletePaperwork(idToDelete);
    if (deletePaperwork?.success) {
      setAlertModalConfig({
        buttonText: t('paperworks.generalTab.alertResultModal.acceptButtonLabel'),
        icon: SuccessIcon,
        message: t('paperworks.generalTab.alertResultModal.deleteSuccessLabel'),
        modalTitle: t('paperworks.generalTab.alertResultModal.deleteSuccessModalTitle'),
      });
    } else {
      setAlertModalConfig({
        buttonText: t('paperworks.generalTab.alertResultModal.acceptButtonLabel'),
        icon: AdvertenceIcon,
        message: t('paperworks.generalTab.alertResultModal.deleteErrorLabel'),
        modalTitle: t('paperworks.generalTab.alertResultModal.deleteErrorModalTitle'),
      });
    }
    setOpenAlertModal(true);
    setUpdateList(true);
  };

  const confirmDeletion = (id: number) => {
    setIdToDelete(id);
    setUpdateList(false);
    setOpenConfirmDeleteModal(true);
  };

  const cancelDeletion = () => setOpenConfirmDeleteModal(false);

  const onCloseAlertModal = () => setOpenAlertModal(false);

  useEffect(() => {
    homeActions?.getPaperworksList();
    homeActions?.resetState();
  }, [updateList, catalogPaperworkTypes.length]);

  return (
    <MainLayout>
      <ConfirmDialog
        open={openConfirmDeleteModal}
        title={t('paperworks.generalTab.alertResultModal.deleteConfirmationTitle')}
        message={t('paperworks.generalTab.alertResultModal.deleteConfirmationMessage')}
        onConfirm={handleDeletePaperwork}
        onCancel={cancelDeletion}
      />
      <AlertResultModalComponent modalConfiguration={alertModalConfig} onClose={onCloseAlertModal} openModal={openAlertModal} />
      <div className={styles.PaperworksAdministration}>
        <form onSubmit={handleSubmit(handleApplyFilters)}>
          <WrapperForm>
            <Grid container spacing={2} direction="row" alignItems="center" style={{ gap: '20px' }}>
              <Grid item xs={12} sm={2}>
                <Select
                  name="procedureTypeId"
                  label={t('paperworks.paperworksListForm.paperworkType')}
                  control={control}
                  options={catalogPaperworkTypes}
                  errors={errors}
                  keyLabel="name"
                  keyValue="id"
                  addDefaultNoneOption
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField name="id" label={t('paperworks.paperworksListForm.code')} control={control} errors={errors} />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField name="shortName" label={t('paperworks.paperworksListForm.paperworkName')} control={control} errors={errors} />
              </Grid>
              <Grid item xs={12} sm={2} container alignItems="center">
                <Button buttonType="find" type="submit">
                  {t('paperworks.paperworksListForm.buttonSearch')}
                </Button>
              </Grid>
            </Grid>
          </WrapperForm>
        </form>

        <Table
          title={t('paperworks.paperworksListTable.title')}
          columns={columns}
          rows={paperworksList}
          onEdit={handleEditPaperwork}
          onDelete={confirmDeletion}
          onPaginationChange={homeActions?.updatePagination}
          rowCount={papeworksTotalRows}
        />
        <Grid item xs style={{ textAlign: 'right' }}>
          <Button buttonType="create" onClick={handleCreateButtonClick}>
            {t('paperworks.paperworksListForm.buttonCreate')}
          </Button>
        </Grid>
      </div>
    </MainLayout>
  );
};

export default PaperworksAdministration;
