import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { Button } from '@/components/ui';
import Image, { StaticImageData } from 'next/image';

interface AlertResultViewProps {
  alertMessage: string;
  onClose: () => void;
  textButton: string;
  icon: StaticImageData;
}

export const AlertResultViewComponent: FC<AlertResultViewProps> = ({ alertMessage, onClose, icon, textButton }) => {
  return (
    <>
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Image src={icon} alt="Icon Modal" priority={true} />
      </Box>
      <Box sx={{ mt: 1 }}>
        <Typography
          sx={{ textAlign: 'center' }}
          dangerouslySetInnerHTML={{
            __html: alertMessage,
          }}
        ></Typography>
      </Box>
      <Box>
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Button variant="contained" buttonType="save" onClick={onClose}>
            {textButton}
          </Button>
        </Box>
      </Box>
    </>
  );
};
