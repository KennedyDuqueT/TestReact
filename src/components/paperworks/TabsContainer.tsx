import React, { useEffect, useState } from 'react';
import { Tabs, Button, AlertResultModalComponent } from '@/components';
import { Box } from '@mui/material';
import { Inbox as InboxIcon } from '@mui/icons-material';
import { useTranslation } from '@/hooks';
import { useRouter } from 'next/router';
import { GeneralTab } from './GeneralTab';
import { StateTab } from './StateTab/StateTab';
import { SectorsAreasTab } from './SectorsAreasTab/SectorsAreasTab';
import { StateTransitionTab } from './StateTransitionTab';
import { ReasonsTab } from './ReasonsTab/ReasonsTab';
import { ParametersTab } from './ParametersTab/ParametersTab';
import { usePaperworks } from '@/context';
import { AdvertenceIcon } from '@/assets';

export const TabsContainer = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { actions, editMode, idPaperwork } = usePaperworks();
  const [openAlertModal, setAlertOpenModal] = useState(false);

  const tabsData = [
    { label: t('paperworks.tabsTitle.general'), content: <GeneralTab />, icon: <InboxIcon /> },
    { label: t('paperworks.tabsTitle.states'), content: <StateTab />, icon: <InboxIcon /> },
    { label: t('paperworks.tabsTitle.sectors'), content: <SectorsAreasTab />, icon: <InboxIcon /> },
    { label: t('paperworks.tabsTitle.stateTransitions'), content: <StateTransitionTab />, icon: <InboxIcon /> },
    { label: t('paperworks.tabsTitle.reasons'), content: <ReasonsTab />, icon: <InboxIcon /> },
    { label: t('paperworks.tabsTitle.parameters'), content: <ParametersTab />, icon: <InboxIcon /> },
  ];

  const handleGoToPaperworksList = () => {
    actions?.setIsPaperworkEditMode(false);
    router.push('/paperworks-administration');
  };

  useEffect(() => {
    if (router.pathname.includes('/edit') && !editMode) {
      router.push('/paperworks-administration');
    }
  }, [router, editMode]);

  const isTabValid = () => {
    if (idPaperwork <= -1) {
      setAlertOpenModal(true);
      return false;
    }
    return true;
  };

  return (
    <>
      <AlertResultModalComponent
        modalConfiguration={{
          buttonText: t('paperworks.generalTab.modalRestrictionBtn'),
          icon: AdvertenceIcon,
          message: t('paperworks.generalTab.modalRestrictionMessage'),
          modalTitle: t('paperworks.generalTab.modalRestrictionTitle'),
        }}
        onClose={() => setAlertOpenModal(false)}
        openModal={openAlertModal}
      />
      <Tabs tabs={tabsData} clearTabs={[2]} validationNextTab={isTabValid} />
      <Box mt={4}>
        <Button buttonType="secondary" onClick={handleGoToPaperworksList}>
          {t('paperworks.btnBack')}
        </Button>
      </Box>
    </>
  );
};
