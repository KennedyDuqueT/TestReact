import React, { FC } from 'react';
import { Modal } from '@/components/ui';
import { useTranslation } from '@/hooks';

interface PDFViewerProps {
  base64: string;
  title: string;
  open: boolean;
  handleClose: () => void;
}

export const PDFViewer: FC<PDFViewerProps> = ({ base64, title, open, handleClose }) => {
  const { t } = useTranslation();

  const pdfUrl = `data:application/pdf;base64,${base64}`;

  return (
    <Modal title={title} maxWidth="lg" open={open} handleClose={handleClose} fontSize={21}>
      <object data={pdfUrl} type="application/pdf" width="100%" height="750">
        <p>
          {t('components.pdfViewer.notDisplayedMessage')}
          <a href={pdfUrl} download>
            {t('components.pdfViewer.notDisplayedBtn')}
          </a>
          .
        </p>
      </object>
    </Modal>
  );
};
