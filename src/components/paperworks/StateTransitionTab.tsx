import React, { useState, FC, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Select, Button, DraggableList, AlertResultModalComponent } from '@/components';
import { Box, Grid } from '@mui/material';
import { useTranslation } from '@/hooks';
import { AdvertenceIcon, SuccessIcon } from '@/assets';
import { usePaperworks } from '@/context';
import { ModalConfiguration } from '@/models/commons';

interface FormValues {
  stateId: string;
}

interface StateTransitionTabProps {
  initialValues?: FormValues;
}

interface statesCatalog {
  id: number;
  title: string;
  order: number;
}

export const StateTransitionTab: FC<StateTransitionTabProps> = ({ initialValues }) => {
  const { transitionList, transitionStatesActions, stateList, statesActions, idPaperwork } = usePaperworks();
  const { t } = useTranslation();

  const [alertModalConfig, setAlertModalConfig] = useState<ModalConfiguration>({
    buttonText: '',
    icon: SuccessIcon,
    message: '',
    modalTitle: '',
  });

  const [dataLoaded, setDataLoaded] = useState({
    transitionDataLoaded: false,
    stateDataLoaded: false,
  });

  const [statesCatalog, setStatesCatalog] = useState<statesCatalog[]>([]);
  const [items, setItems] = useState<statesCatalog[]>([]);
  const [openAlertModal, setOpenAlertModal] = useState(false);

  const { control, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: initialValues || { stateId: '' },
  });

  const { errors } = formState;

  const onSubmitForm: SubmitHandler<FormValues> = (data) => {
    const newId = Number(data.stateId);
    const newItem = statesCatalog.find((item) => item.id === newId);

    if (newItem) {
      const isItemExists = items.some((item) => item.id === newId);

      if (!isItemExists) {
        newItem.order = items.length + 1;
        setItems((oldItems) => [...oldItems, newItem]);
      } else {
        setAlertModalConfig({
          buttonText: t('paperworks.stateTransitionTab.modalItemValidation.buttonText'),
          icon: AdvertenceIcon,
          message: t('paperworks.stateTransitionTab.modalItemValidation.message'),
          modalTitle: t('paperworks.stateTransitionTab.modalItemValidation.modalTitle'),
        });
        setOpenAlertModal(true);
      }
    }
  };

  const removeItem = (id: number) => {
    setItems((oldItems) => oldItems.filter((item) => item.id !== id));
  };

  const onCloseAlertModal = () => setOpenAlertModal(false);

  const onReorder = (id: number, newPosition: number) => {
    setItems((oldItems) => {
      const itemBeingMoved = oldItems.find((item) => item.id === id);
      if (!itemBeingMoved) return oldItems;

      const otherItems = oldItems.filter((item) => item.id !== id);

      otherItems.splice(newPosition - 1, 0, itemBeingMoved);

      return otherItems.map((item, index) => ({ ...item, order: index + 1 }));
    });
  };

  const handleSave = async () => {
    const newData = items.map((i: any) => ({
      procedureStageId: i.id,
      order: i.order,
    }));
    const saveData = await transitionStatesActions?.updateOrders(newData);
    if (saveData?.success) {
      setAlertModalConfig({
        buttonText: t('paperworks.alertResultModal.acceptButtonLabel', { entityName: t('paperworks.stateTransitionTab.entityName') }),
        icon: SuccessIcon,
        message: t('paperworks.alertResultModal.updateSuccessLabel', { entityName: t('paperworks.stateTransitionTab.entityName') }),
        modalTitle: t('paperworks.alertResultModal.updateSuccessModalTitle', { entityName: t('paperworks.stateTransitionTab.entityName') }),
      });
      setOpenAlertModal(true);
    } else {
      setAlertModalConfig({
        buttonText: t('paperworks.alertResultModal.acceptButtonLabel', { entityName: t('paperworks.stateTransitionTab.entityName') }),
        icon: AdvertenceIcon,
        message: t('paperworks.alertResultModal.updateErrorLabel', { entityName: t('paperworks.stateTransitionTab.entityName') }),
        modalTitle: t('paperworks.alertResultModal.updateErrorModalTitle', { entityName: t('paperworks.stateTransitionTab.entityName') }),
      });
    }
  };

  const fetchTransitionData = async () => {
    if (!dataLoaded.transitionDataLoaded) {
      await transitionStatesActions?.getTransitionsList();
      setDataLoaded((prevData) => ({
        ...prevData,
        transitionDataLoaded: true,
      }));
    }
  };
  const fetchStateData = async () => {
    if (!dataLoaded.stateDataLoaded) {
      await statesActions?.getStatesListById(idPaperwork);
      setDataLoaded((prevData) => ({
        ...prevData,
        stateDataLoaded: true,
      }));
    }
  };

  useEffect(() => {
    fetchTransitionData();
    fetchStateData();

    const newStateList = stateList.map((item: any) => ({
      id: item.id,
      title: item.name,
      order: item.order,
    }));

    setStatesCatalog(newStateList);

    setItems(transitionList);
  }, [stateList, transitionList]);

  return (
    <>
      <AlertResultModalComponent modalConfiguration={alertModalConfig} onClose={onCloseAlertModal} openModal={openAlertModal} />
      <Box sx={{ my: 4 }}>
        <Grid container spacing={2}>
          {stateList.length < 1 && (
            <Grid item xs={12}>
              <span style={{ fontSize: '12px', color: 'gray' }}>{t('paperworks.stateTransitionTab.noStatesData')}</span>
            </Grid>
          )}
          <Grid item xs={12}>
            <Select
              name="stateId"
              label={t('paperworks.stateTransitionTab.selectState')}
              rules={{ required: t('paperworks.errors.requiredField') }}
              options={statesCatalog}
              control={control}
              errors={errors}
              keyLabel="title"
              keyValue="id"
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="flex-end">
              <Button type="submit" onClick={handleSubmit(onSubmitForm)}>
                {t('paperworks.stateTransitionTab.btnAdd')}
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <DraggableList items={items} onReorder={onReorder} onRemove={removeItem} />
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="flex-end" spacing={2}>
              {items.length > 0 && (
                <Button type="submit" onClick={handleSave}>
                  {t('paperworks.stateTransitionTab.btnSave')}
                </Button>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
