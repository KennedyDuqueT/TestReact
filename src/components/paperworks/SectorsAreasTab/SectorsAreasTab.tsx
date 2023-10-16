import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { Table, Button, WrapperForm, Modal, ConfirmDialog, AlertResultModalComponent } from '@/components';
import { GridColDef } from '@mui/x-data-grid';
import { useTranslation } from '@/hooks';
import AddIcon from '@mui/icons-material/Add';
import { SectorsAllowedToGenerateForm } from './SectorsAllowedToGenerateForm';
import { SectorsAllowedToSeeForm } from './SectorsAllowedToSeeForm';
import { usePaperworks } from '@/context';
import { AdvertenceIcon, SuccessIcon } from '@/assets';
import { ModalConfiguration } from '@/models/commons';

export const SectorsAreasTab = () => {
  const { t } = useTranslation();
  const { sectorsAllowedToGenerateList, sectorsAllowedToSeeList, sectorsActions } = usePaperworks();

  const [idToDelete, setIdToDelete] = useState<number>(-1);
  const [openConfirmDeleteModal, setOpenConfirmDeleteModal] = useState<boolean>(false);
  const [openModalAddSectorsCanGenerate, setOpenModalAddSectorsCanGenerate] = useState(false);
  const [openModalAddSectorsCanSee, setOpenModalAddSectorsCanSee] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [openAlertModal, setOpenAlertModal] = useState<boolean>(false);
  const [alertModalConfig, setAlertModalConfig] = useState<ModalConfiguration>({
    buttonText: '',
    icon: SuccessIcon,
    message: '',
    modalTitle: '',
  });

  const columnsFoo: GridColDef[] = [
    {
      field: 'code',
      headerName: t('paperworks.sectorsAreasTab.tableAllowedToGenerate.titleColumn1'),
      width: 100,
    },
    {
      field: 'description',
      headerName: t('paperworks.sectorsAreasTab.tableAllowedToGenerate.titleColumn2'),
      width: 350,
    },
  ];

  const columnsBar: GridColDef[] = [
    {
      field: 'code',
      headerName: t('paperworks.sectorsAreasTab.tableAllowedToSee.titleColumn1'),
      width: 100,
    },
    {
      field: 'update',
      headerName: t('paperworks.sectorsAreasTab.tableAllowedToSee.titleColumn2'),
      width: 150,
      valueFormatter: ({ value }) =>
        value ? t('paperworks.sectorsAreasTab.tableAllowedToSee.updateYes') : t('paperworks.sectorsAreasTab.tableAllowedToSee.updateNo'),
    },
    {
      field: 'description',
      headerName: t('paperworks.sectorsAreasTab.tableAllowedToSee.titleColumn3'),
      width: 350,
    },
  ];

  const openAddSectorsCanGenerate = () => setOpenModalAddSectorsCanGenerate(true);

  const closeModalAddSectorsCanGenerate = () => {
    setEditMode(false);
    setOpenModalAddSectorsCanGenerate(false);
  };

  const openAddSectorsCanSee = () => setOpenModalAddSectorsCanSee(true);

  const closeModalAddSectorsCanSee = () => {
    setEditMode(false);
    setOpenModalAddSectorsCanSee(false);
  };

  const editSectorAllowedToGenerate = async (id: number) => {
    setEditMode(true);
    const req = await sectorsActions?.getEditData(id);
    if (req?.success) {
      setOpenModalAddSectorsCanGenerate(true);
    }
  };

  const editSectorAllowedToSee = async (id: number) => {
    setEditMode(true);
    const req = await sectorsActions?.getEditData(id);
    if (req?.success) {
      setOpenModalAddSectorsCanSee(true);
    }
  };

  const handleDeleteSector = async () => {
    setOpenConfirmDeleteModal(false);
    const deleteState = await sectorsActions?.deleteSector(idToDelete);

    if (deleteState?.success) {
      setAlertModalConfig({
        buttonText: t('paperworks.alertResultModal.acceptButtonLabel', { entityName: t('paperworks.sectorsAreasTab.entityName') }),
        icon: SuccessIcon,
        message: t('paperworks.alertResultModal.deleteSuccessLabel', { entityName: t('paperworks.sectorsAreasTab.entityName') }),
        modalTitle: t('paperworks.alertResultModal.deleteSuccessModalTitle', { entityName: t('paperworks.sectorsAreasTab.entityName') }),
      });
    } else {
      setAlertModalConfig({
        buttonText: t('paperworks.alertResultModal.acceptButtonLabel', { entityName: t('paperworks.sectorsAreasTab.entityName') }),
        icon: AdvertenceIcon,
        message: t('paperworks.alertResultModal.deleteErrorLabel', { entityName: t('paperworks.sectorsAreasTab.entityName') }),
        modalTitle: t('paperworks.alertResultModal.deleteErrorModalTitle', { entityName: t('paperworks.sectorsAreasTab.entityName') }),
      });
    }
    setOpenAlertModal(true);
  };

  const cancelDeletion = () => setOpenConfirmDeleteModal(false);

  const onCloseAlertModal = () => setOpenAlertModal(false);

  const confirmDeletion = (id: number) => {
    setIdToDelete(id);
    setOpenConfirmDeleteModal(true);
  };

  useEffect(() => {
    sectorsActions?.getSectorsList();
    sectorsActions?.getCatalogs();
  }, []);

  return (
    <Box display="flex" justifyContent="flex-start" sx={{ gap: 5 }}>
      <ConfirmDialog
        open={openConfirmDeleteModal}
        title={t('paperworks.alertResultModal.deleteConfirmationTitle', { entityName: t('paperworks.sectorsAreasTab.entityName') })}
        message={t('paperworks.alertResultModal.deleteConfirmationMessage', { entityName: t('paperworks.sectorsAreasTab.entityName') })}
        onConfirm={handleDeleteSector}
        onCancel={cancelDeletion}
      />
      <AlertResultModalComponent modalConfiguration={alertModalConfig} onClose={onCloseAlertModal} openModal={openAlertModal} />
      <Modal
        title={
          editMode
            ? t('paperworks.sectorsAreasTab.titleModalSectorsAllowedToGenerateEdit')
            : t('paperworks.sectorsAreasTab.titleModalSectorsAllowedToGenerate')
        }
        maxWidth="sm"
        open={openModalAddSectorsCanGenerate}
        handleClose={closeModalAddSectorsCanGenerate}
        icon={<AddIcon />}
        paddingTop={40}
      >
        {openModalAddSectorsCanGenerate && <SectorsAllowedToGenerateForm closeModal={closeModalAddSectorsCanGenerate} editMode={editMode} />}
      </Modal>
      <Modal
        title={
          editMode ? t('paperworks.sectorsAreasTab.titleModalSectorsAllowedToSeeEdit') : t('paperworks.sectorsAreasTab.titleModalSectorsAllowedToSee')
        }
        maxWidth="sm"
        open={openModalAddSectorsCanSee}
        handleClose={closeModalAddSectorsCanSee}
        icon={<AddIcon />}
        paddingTop={40}
      >
        {openModalAddSectorsCanSee && <SectorsAllowedToSeeForm closeModal={closeModalAddSectorsCanSee} editMode={editMode} />}
      </Modal>
      <WrapperForm>
        <Table
          title={t('paperworks.sectorsAreasTab.tableSectorsAllowedToGenerateTitle')}
          variant="secondary"
          columns={columnsFoo}
          rows={sectorsAllowedToGenerateList}
          onEdit={editSectorAllowedToGenerate}
          onDelete={confirmDeletion}
        />
        <Box display="flex" justifyContent="flex-end">
          <Button onClick={openAddSectorsCanGenerate}>{t('paperworks.sectorsAreasTab.addButton')}</Button>
        </Box>
      </WrapperForm>
      <WrapperForm>
        <Table
          title={t('paperworks.sectorsAreasTab.tableSectorsAllowedToSeeTitle')}
          variant="secondary"
          columns={columnsBar}
          rows={sectorsAllowedToSeeList}
          onEdit={editSectorAllowedToSee}
          onDelete={confirmDeletion}
        />
        <Box display="flex" justifyContent="flex-end">
          <Button onClick={openAddSectorsCanSee}>{t('paperworks.sectorsAreasTab.addButton')}</Button>
        </Box>
      </WrapperForm>
    </Box>
  );
};
