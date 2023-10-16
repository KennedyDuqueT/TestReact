import { Modal } from '@/components/ui';
import { FC } from 'react';
import { AlertResultViewComponent } from './AlertResultView';
import { ModalConfiguration } from '@/models/commons';

interface AlertResultModalProps {
  openModal: boolean;
  onClose: () => void;
  modalConfiguration: ModalConfiguration;
}

export const AlertResultModalComponent: FC<AlertResultModalProps> = ({ openModal, onClose, modalConfiguration }) => {
  return (
    <Modal key={`${openModal}`} title={modalConfiguration.modalTitle} maxWidth="sm" open={openModal} handleClose={onClose}>
      <AlertResultViewComponent
        alertMessage={modalConfiguration.message}
        onClose={onClose}
        icon={modalConfiguration.icon}
        textButton={modalConfiguration.buttonText}
      ></AlertResultViewComponent>
    </Modal>
  );
};
