import { StaticImageData } from 'next/image';

export interface ModalConfiguration {
  message: string;
  icon: StaticImageData;
  buttonText: string;
  modalTitle: string;
}

export interface ModalOptionsConfiguration {
  message?: string;
  icon?: StaticImageData;
  buttonCancelText: string;
  buttonSucessText: string;
  modalTitle: string;
  input?: JSX.Element | JSX.Element[];
  onReset?: () => void;
  onSubmit?: (callback: () => void) => void;
}
