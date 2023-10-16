import { FC, LegacyRef, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { modalConfigurationInitialValue } from './RoutesManagement.constants';
import RouteFormComponent from './RouteForm';
import RouteBottomButtonsComponent from './RouteBottomButtons';
import RouteSearchModalComponent from './RouteSearchModal';
import { ModalConfiguration } from '@/models/commons';
import { AlertResultModalComponent } from '@/components/ui';
import { AdvertenceIcon, SuccessIcon } from '@/assets';
import { useTranslation } from '@/hooks';
import { RouteInterface, routeInitialValue } from '@/models/billing';
import { useDataMastersManagement, useRouteManagement } from '@/context/billing';

const RouteCreateOrEditViewComponent: FC = () => {
  const { t } = useTranslation();
  const { actions } = useRouteManagement();
  const { actions: dataMasterAction } = useDataMastersManagement();
  const [openSearchModal, setSearchOpenModal] = useState(false);
  const [openAlertModal, setAlertOpenModal] = useState(false);
  const [alertModalConfig, setAlertModalConfig] = useState<ModalConfiguration>(modalConfigurationInitialValue);
  const form = useForm<RouteInterface>({
    defaultValues: routeInitialValue,
  });
  const formRef: LegacyRef<HTMLFormElement> = useRef(null);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = form;

  useEffect(() => {
    actions?.loadInitialInfo();
    dataMasterAction?.loadInitialInfo();
  }, []);

  const onOpenSearchModal = () => {
    setSearchOpenModal(true);
  };

  const onCancelCreateOrEdit = () => {
    setSearchOpenModal(false);
    reset(routeInitialValue);
  };

  const onCreateOrEdit = async (routeToEditOrCreate: RouteInterface) => {
    if (await actions?.saveRoute({ ...routeToEditOrCreate })) {
      setAlertModalConfig({
        buttonText: t('components.alertResultModal.acceptButtonLabel'),
        icon: SuccessIcon,
        message: t('billing.maintenance.routesManagement.saveWithSuccessLabel'),
        modalTitle: t('billing.maintenance.routesManagement.saveWithSuccessLabel'),
      });
    } else {
      console.error(t('billing.maintenance.routesManagement.saveWithErrorLabel'));
    }

    setAlertModalConfig({
      buttonText: t('components.alertResultModal.acceptButtonLabel'),
      icon: SuccessIcon,
      message: t('billing.maintenance.routesManagement.saveWithSuccessLabel'),
      modalTitle: t('billing.maintenance.routesManagement.saveWithSuccessLabel'),
    });
    setAlertOpenModal(true);
    reset(routeInitialValue);
  };

  const onCancelModalSearch = () => {
    setSearchOpenModal(false);
  };

  const onCloseAlertModal = () => {
    setAlertOpenModal(false);
  };

  const onSearchRoute = async (routeToSearch: RouteInterface) => {
    setSearchOpenModal(false);
    const routeSearchResult = await actions?.searchRoute(routeToSearch);
    if (routeSearchResult && routeSearchResult.length > 0) {
      form.reset(routeSearchResult[0]);
    } else {
      setAlertModalConfig({
        buttonText: t('components.alertResultModal.goBackButtonLabel'),
        icon: AdvertenceIcon,
        message:
          t('billing.maintenance.routesManagement.searchWithErrorLabel1') +
          routeToSearch.name +
          t('billing.maintenance.routesManagement.searchWithErrorLabel2'),
        modalTitle: t('billing.maintenance.routesManagement.searchModalTitle'),
      });
      setAlertOpenModal(true);
    }
  };

  return (
    <>
      <RouteFormComponent
        formRef={formRef}
        form={form}
        control={control}
        onCreateOrEdit={onCreateOrEdit}
        errors={errors}
        handleSubmit={handleSubmit}
        onOpenSearchModal={onOpenSearchModal}
      ></RouteFormComponent>

      <AlertResultModalComponent
        modalConfiguration={alertModalConfig}
        onClose={onCloseAlertModal}
        openModal={openAlertModal}
      ></AlertResultModalComponent>

      <RouteSearchModalComponent
        onCancelModalSearch={onCancelModalSearch}
        openSearchModal={openSearchModal}
        onSearchRoute={onSearchRoute}
      ></RouteSearchModalComponent>

      <RouteBottomButtonsComponent formRef={formRef} isValid={isValid} onCancel={onCancelCreateOrEdit}></RouteBottomButtonsComponent>
    </>
  );
};

export default RouteCreateOrEditViewComponent;
