import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { AlertResultModalComponent, Button, ConfirmDialog, Modal, Table } from '@/components';
import { AddReasonForm } from './AddReasonForm';
import { GridColDef } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from '@/hooks';
import { usePaperworks } from '@/context';
import { AdvertenceIcon, SuccessIcon } from '@/assets';
import { ModalConfiguration } from '@/models/commons';

export const ReasonsTab = () => {
  const { t } = useTranslation();
  const { reasonsActions, reasonsList } = usePaperworks();

  const columns: GridColDef[] = [
    { field: 'code', headerName: t('paperworks.reasonsTab.column1Title'), width: 150 },
    { field: 'description', headerName: t('paperworks.reasonsTab.column2Title'), width: 350 },
  ];

  const [idToDelete, setIdToDelete] = useState<number>(-1);
  const [openConfirmDeleteModal, setOpenConfirmDeleteModal] = useState<boolean>(false);
  const [openModalAddReason, setOpenModalAddReason] = useState<boolean>(false);
  const [editMode, setEditMode] = useState(false);
  const [openAlertModal, setOpenAlertModal] = useState<boolean>(false);
  const [alertModalConfig, setAlertModalConfig] = useState<ModalConfiguration>({
    buttonText: '',
    icon: SuccessIcon,
    message: '',
    modalTitle: '',
  });

  useEffect(() => {
    reasonsActions?.getReasonsCatalogs();
    reasonsActions?.getReasonsList();
  }, []);

  const editReason = async (id: number) => {
    const editData = await reasonsActions?.getEditData(id);
    if (editData?.success) {
      setEditMode(true);
      setOpenModalAddReason(true);
    }
  };

  const handleDeleteSector = async () => {
    setOpenConfirmDeleteModal(false);
    const deleteData = await reasonsActions?.deleteReason(idToDelete);

    if (deleteData?.success) {
      setAlertModalConfig({
        buttonText: t('paperworks.alertResultModal.acceptButtonLabel', { entityName: t('paperworks.reasonsTab.entityName') }),
        icon: SuccessIcon,
        message: t('paperworks.alertResultModal.deleteSuccessLabel', { entityName: t('paperworks.reasonsTab.entityName') }),
        modalTitle: t('paperworks.alertResultModal.deleteSuccessModalTitle', { entityName: t('paperworks.reasonsTab.entityName') }),
      });
    } else {
      setAlertModalConfig({
        buttonText: t('paperworks.alertResultModal.acceptButtonLabel', { entityName: t('paperworks.reasonsTab.entityName') }),
        icon: AdvertenceIcon,
        message: t('paperworks.alertResultModal.deleteErrorLabel', { entityName: t('paperworks.reasonsTab.entityName') }),
        modalTitle: t('paperworks.alertResultModal.deleteErrorModalTitle', { entityName: t('paperworks.reasonsTab.entityName') }),
      });
    }
    setOpenAlertModal(true);
  };

  const cancelDeletion = () => setOpenConfirmDeleteModal(false);

  const onCloseAlertModal = () => setOpenAlertModal(false);

  const closeModalAddReason = () => setOpenModalAddReason(false);

  const confirmDeletion = (id: number) => {
    setIdToDelete(id);
    setOpenConfirmDeleteModal(true);
  };

  const handleOpenModalAddReason = () => {
    setEditMode(false);
    setOpenModalAddReason(true);
  };

  return (
    <>
      <ConfirmDialog
        open={openConfirmDeleteModal}
        title={t('paperworks.alertResultModal.deleteConfirmationTitle', { entityName: t('paperworks.reasonsTab.entityName') })}
        message={t('paperworks.alertResultModal.deleteConfirmationMessage', { entityName: t('paperworks.reasonsTab.entityName') })}
        onConfirm={handleDeleteSector}
        onCancel={cancelDeletion}
      />
      <AlertResultModalComponent modalConfiguration={alertModalConfig} onClose={onCloseAlertModal} openModal={openAlertModal} />
      <Modal
        title={editMode ? t('paperworks.reasonsTab.modalAddReason.titleEdit') : t('paperworks.reasonsTab.modalAddReason.title')}
        maxWidth="sm"
        open={openModalAddReason}
        handleClose={closeModalAddReason}
        icon={<AddIcon />}
        paddingTop={40}
      >
        <AddReasonForm editMode={editMode} closeModal={closeModalAddReason} />
      </Modal>
      <Table
        title={t('paperworks.reasonsTab.tableTitle')}
        variant="secondary"
        columns={columns}
        rows={reasonsList}
        onEdit={editReason}
        onDelete={confirmDeletion}
      />
      <Box display="flex" justifyContent="flex-end" mr={2.5} mb={2.5}>
        <Button onClick={handleOpenModalAddReason}>{t('paperworks.reasonsTab.addButton')}</Button>
      </Box>
    </>
  );
};
