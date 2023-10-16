import React, { ElementType, FC } from 'react';
import IconButton from '@mui/material/IconButton';
import { SvgIconProps } from '@mui/material/SvgIcon';

interface ButtonIconProps {
  IconComponent: ElementType<SvgIconProps>;
  onClick?: () => void;
  color?: 'primary' | 'secondary' | 'inherit';
}

export const ButtonIcon: FC<ButtonIconProps> = ({ IconComponent, onClick, color = 'primary' }) => {
  return (
    <IconButton color={color} onClick={onClick}>
      <IconComponent />
    </IconButton>
  );
};
