import { Modal } from '@/components/ui';
import { FC } from 'react';
import { AlertOptionsViewComponent } from './AlertOptionsView';
import { ModalOptionsConfiguration } from '@/models/commons';

interface AlertOptionsModalProps {
  openModal: boolean;
  onCancel: () => void;
  onSuccess: () => void;
  modalConfiguration: ModalOptionsConfiguration;
}

export const AlertOptionsModalComponent: FC<AlertOptionsModalProps> = ({ openModal, onCancel, modalConfiguration, onSuccess }) => {
  return (
    <Modal key={`${openModal}`} title={modalConfiguration.modalTitle} maxWidth="sm" open={openModal} handleClose={onCancel}>
      <AlertOptionsViewComponent
        alertMessage={modalConfiguration.message}
        onCancel={onCancel}
        onSucess={onSuccess}
        icon={modalConfiguration.icon}
        textCancelButton={modalConfiguration.buttonCancelText}
        textSucessButton={modalConfiguration.buttonSucessText}
      >
        {modalConfiguration.input}
      </AlertOptionsViewComponent>
    </Modal>
  );
};
