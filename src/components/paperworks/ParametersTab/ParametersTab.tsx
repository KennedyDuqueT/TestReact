import { useEffect, useState } from 'react';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { AdvertenceIcon, SuccessIcon } from '@/assets';
import { AlertResultModalComponent, Button, ConfirmDialog, Modal, Table } from '@/components';
import { usePaperworks } from '@/context';
import { useTranslation } from '@/hooks';
import { ModalConfiguration } from '@/models/commons';
import { PaperworksParameter } from '@/models/paperworks';
import { ParameterForm } from './ParameterForm';

export const ParametersTab = () => {
  const { t } = useTranslation();
  const { parametersActions, parametersList, parameterDataEdit } = usePaperworks();

  const columns: GridColDef[] = [
    {
      field: 'code',
      headerName: t('paperworks.parametersTab.column1Title'),
      renderCell: ({ row }: GridRenderCellParams<PaperworksParameter>) => row.id,
      width: 150,
    },
    { field: 'name', headerName: t('paperworks.parametersTab.columnNameTitle'), width: 150 },
    { field: 'description', headerName: t('paperworks.parametersTab.column2Title'), width: 300 },
    { field: 'value', headerName: t('paperworks.parametersTab.column3Title'), width: 350 },
  ];

  const [idToDelete, setIdToDelete] = useState<number>(-1);
  const [openConfirmDeleteModal, setOpenConfirmDeleteModal] = useState<boolean>(false);
  const [openModalAddParameter, setOpenModalAddParameter] = useState<boolean>(false);
  const [editMode, setEditMode] = useState(false);
  const [openAlertModal, setOpenAlertModal] = useState<boolean>(false);
  const [alertModalConfig, setAlertModalConfig] = useState<ModalConfiguration>({
    buttonText: '',
    icon: SuccessIcon,
    message: '',
    modalTitle: '',
  });

  useEffect(() => {
    parametersActions?.getParametersCatalogs();
    parametersActions?.getParametersList();
  }, []);

  const editParameter = async (id: number) => {
    const editData = await parametersActions?.getParameter(id);
    if (editData?.success) {
      setEditMode(true);
      setOpenModalAddParameter(true);
    }
  };

  const handleDeleteSector = async () => {
    setOpenConfirmDeleteModal(false);
    const deleteData = await parametersActions?.deleteParameter(idToDelete);

    if (deleteData?.success) {
      setAlertModalConfig({
        buttonText: t('paperworks.alertResultModal.acceptButtonLabel', { entityName: t('paperworks.parametersTab.entityName') }),
        icon: SuccessIcon,
        message: t('paperworks.alertResultModal.deleteSuccessLabel', { entityName: t('paperworks.parametersTab.entityName') }),
        modalTitle: t('paperworks.alertResultModal.deleteSuccessModalTitle', { entityName: t('paperworks.parametersTab.entityName') }),
      });
    } else {
      setAlertModalConfig({
        buttonText: t('paperworks.alertResultModal.acceptButtonLabel', { entityName: t('paperworks.parametersTab.entityName') }),
        icon: AdvertenceIcon,
        message: t('paperworks.alertResultModal.deleteErrorLabel', { entityName: t('paperworks.parametersTab.entityName') }),
        modalTitle: t('paperworks.alertResultModal.deleteErrorModalTitle', { entityName: t('paperworks.parametersTab.entityName') }),
      });
    }
    setOpenAlertModal(true);
  };

  const cancelDeletion = () => setOpenConfirmDeleteModal(false);

  const onCloseAlertModal = () => setOpenAlertModal(false);

  const closeModalAddParameter = () => {
    parametersActions?.cleanSelectedParameter();
    setOpenModalAddParameter(false);
  };

  const confirmDeletion = (id: number) => {
    setIdToDelete(id);
    setOpenConfirmDeleteModal(true);
  };

  const handleOpenModalAddParameter = () => {
    setEditMode(false);
    setOpenModalAddParameter(true);
  };

  return (
    <>
      <ConfirmDialog
        open={openConfirmDeleteModal}
        title={t('paperworks.alertResultModal.deleteConfirmationTitle', { entityName: t('paperworks.parametersTab.entityName') })}
        message={t('paperworks.alertResultModal.deleteConfirmationMessage', { entityName: t('paperworks.parametersTab.entityName') })}
        onConfirm={handleDeleteSector}
        onCancel={cancelDeletion}
      />
      <AlertResultModalComponent modalConfiguration={alertModalConfig} onClose={onCloseAlertModal} openModal={openAlertModal} />
      <Modal
        title={t(`paperworks.parametersTab.modalAddParameter.${editMode ? 'titleEdit' : 'title'}`)}
        maxWidth="sm"
        open={openModalAddParameter}
        handleClose={closeModalAddParameter}
        icon={<AddIcon />}
        paddingTop={40}
        keepMounted={false}
      >
        <ParameterForm closeModal={closeModalAddParameter} initialValues={parameterDataEdit} />
      </Modal>

      <Table
        title={t('paperworks.parametersTab.tableTitle')}
        variant="secondary"
        columns={columns}
        rows={parametersList}
        onEdit={editParameter}
        onDelete={confirmDeletion}
      />

      <Box display="flex" justifyContent="flex-end" mr={2.5} mb={2.5}>
        <Button onClick={handleOpenModalAddParameter}>{t('paperworks.parametersTab.addButton')}</Button>
      </Box>
    </>
  );
};
