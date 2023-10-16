import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { Button } from '@/components/ui';
import Image, { StaticImageData } from 'next/image';

interface AlertOptionsViewProps {
  alertMessage?: string;
  onCancel: () => void;
  onSucess: () => void;
  textSucessButton: string;
  textCancelButton: string;
  icon?: StaticImageData;
  children?: JSX.Element | JSX.Element[];
}

export const AlertOptionsViewComponent: FC<AlertOptionsViewProps> = ({
  alertMessage,
  onCancel,
  onSucess,
  icon,
  textSucessButton,
  textCancelButton,
  children,
}) => {
  return (
    <>
      <Box sx={{ mt: 4, textAlign: 'center' }}>{icon ? <Image src={icon} alt="Icon Modal" priority={true} /> : null}</Box>
      <Box sx={{ mt: 1 }}>
        {alertMessage ? (
          <Typography
            sx={{ textAlign: 'center' }}
            dangerouslySetInnerHTML={{
              __html: alertMessage,
            }}
          />
        ) : null}
        {children}
      </Box>
      <Box>
        <Box sx={{ textAlign: 'right', mt: 2 }}>
          <Button variant="contained" buttonType="cancel" onClick={onCancel} style={{ marginRight: 8 }}>
            {textCancelButton}
          </Button>
          <Button variant="contained" buttonType="save" onClick={onSucess}>
            {textSucessButton}
          </Button>
        </Box>
      </Box>
    </>
  );
};
