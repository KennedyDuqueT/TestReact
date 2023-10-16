import React, { PropsWithChildren, FC } from 'react';
import { Box } from '@mui/material';
import { wrapperStyle, titleStyle, childrenStyle, titleSecondaryStyle, wrapperSecondaryStyle } from './WrapperForm.styles';
import { Button } from '@/components';
import { useTranslation } from '@/hooks';

type WrapperFormProps = PropsWithChildren<{
  title?: string;
  variant?: 'primary' | 'secondary';
  onSearch?: () => void;
  customButton?: () => any;
}>;

export const WrapperForm: FC<WrapperFormProps> = ({ children, title, variant = 'primary', onSearch, customButton }) => {
  const { t } = useTranslation();

  const selectedWrapperStyle = variant === 'primary' ? wrapperStyle : wrapperSecondaryStyle;
  const selectedTitleStyle = variant === 'primary' ? titleStyle : titleSecondaryStyle;

  return (
    <Box sx={selectedWrapperStyle}>
      {(title || onSearch) && (
        <Box display="flex" justifyContent="space-between" alignItems="center" sx={selectedTitleStyle}>
          {title}

          {onSearch && (
            <Button variant="contained" onClick={onSearch} buttonType="find">
              {t('components.button.search')}
            </Button>
          )}

          {customButton?.()}
        </Box>
      )}

      <Box sx={{ ...childrenStyle(), paddingTop: title ? '0px' : '30px' }}>{children}</Box>
    </Box>
  );
};
