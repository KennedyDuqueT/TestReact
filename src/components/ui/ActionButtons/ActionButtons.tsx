import { FC } from 'react';
import { Button, ButtonType } from '@/components';
import { Box, BoxProps } from '@mui/material';

export interface CommonButton {
  label: string;
  type: ButtonType;
  variant?: 'contained' | 'outlined' | 'text';
  disabled?: boolean;
  onClick: () => void;
}

interface Props {
  buttons: CommonButton[];
  containerProps?: BoxProps;
}

export const ActionButtons: FC<Props> = ({ buttons, containerProps }) => {
  const { length } = buttons;

  return (
    <Box display="flex" justifyContent="flex-end" mt={2} {...containerProps}>
      {buttons.map((buttonItem, index) => (
        <Box key={`action-button-${index}`} sx={{ mr: index < length - 1 ? 2 : 0 }}>
          <Button
            variant={buttonItem.variant || 'contained'}
            buttonType={buttonItem.type}
            onClick={buttonItem.onClick}
            disabled={buttonItem.disabled}
          >
            {buttonItem.label}
          </Button>
        </Box>
      ))}
    </Box>
  );
};
