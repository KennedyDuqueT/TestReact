import React, { FC } from 'react';
import { default as MUIButton, ButtonProps as MUIButtonProps } from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Download } from '@mui/icons-material';

export type ButtonType =
  | 'edit'
  | 'delete'
  | 'finish'
  | 'primary'
  | 'secondary'
  | 'find'
  | 'create'
  | 'cancel'
  | 'save'
  | 'export'
  | 'abort'
  | 'login';

interface ButtonProps extends MUIButtonProps {
  buttonType?: ButtonType;
  width?: string | number;
}

export const Button: FC<ButtonProps> = ({ buttonType = 'primary', width = 'auto', children, ...props }) => {
  const buttonStyles = {
    edit: {
      bgcolor: 'white',
      color: '#0065BD',
      hoverColor: '#004a8a',
      borderColor: '#0065BD',
      borderRadius: '20px',
      borderWidth: '2px',
    },
    delete: {
      bgcolor: '#FF0000',
      color: 'white',
      hoverColor: '#cc0000',
      borderColor: '#FF0000',
      borderRadius: '5px',
      borderWidth: '0px',
    },
    finish: {
      bgcolor: '#E00035',
      color: 'white',
      hoverColor: '#cc0000',
      borderColor: '#E00035',
      borderRadius: '5px',
      borderWidth: '0px',
    },
    primary: {
      bgcolor: '#70BC71',
      color: 'white',
      hoverColor: '#398640',
      borderColor: '#2F89DC',
      borderRadius: '5px',
      borderWidth: '0px',
    },
    secondary: {
      bgcolor: '#6C757D',
      color: 'white',
      hoverColor: '#42484d',
      borderColor: '#6C757D',
      borderRadius: '5px',
      borderWidth: '0px',
    },
    find: {
      bgcolor: '#70BC71',
      color: 'white',
      hoverColor: '#398640',
      borderColor: '#2F89DC',
      borderRadius: '5px',
      borderWidth: '0px',
    },
    create: {
      bgcolor: '#70BC71',
      color: 'white',
      hoverColor: '#398640',
      borderColor: '#0065BD',
      borderRadius: '5px',
      borderWidth: '0px',
    },
    cancel: {
      bgcolor: '#6C757D',
      color: 'white',
      hoverColor: '#868686',
      borderColor: '#6C757D',
      borderRadius: '5px',
      borderWidth: '0px',
    },
    save: {
      bgcolor: '#70BC71',
      color: 'white',
      hoverColor: '#398640',
      borderColor: '#398640',
      borderRadius: '5px',
      borderWidth: '0px',
    },
    export: {
      bgcolor: '#70BC71',
      color: 'white',
      hoverColor: '#398640',
      borderColor: '#398640',
      borderRadius: '5px',
      borderWidth: '0px',
    },
    abort: {
      bgcolor: '#E00035',
      color: 'white',
      hoverColor: '#cc0000',
      borderColor: '#E00035',
      borderRadius: '5px',
      borderWidth: '0px',
    },
    login: {
      bgcolor: '#B0B0B0',
      color: 'white',
      borderWidth: '0px',
      hoverColor: '#B0B0B0',
      borderColor: '#B0B0B0',
      borderRadius: 5,
      border: 'none',
    },
  };

  const selectIcon = (buttonType: ButtonProps['buttonType']) => {
    switch (buttonType) {
      case 'find':
        return <SearchIcon />;
      case 'create':
        return <AddIcon />;
      case 'delete':
        return <DeleteIcon />;
      case 'edit':
        return <EditIcon />;
      case 'export':
        return <Download />;
      default:
        return null;
    }
  };

  return (
    <MUIButton
      {...props}
      sx={{
        width: width,
        borderRadius: buttonStyles[buttonType].borderRadius,
        height: '40px',
        bgcolor: buttonStyles[buttonType].bgcolor,
        color: buttonStyles[buttonType].color,
        borderColor: buttonStyles[buttonType].borderColor,
        borderWidth: buttonStyles[buttonType].borderWidth,
        borderStyle: 'solid',
        textTransform: 'uppercase',
        '&:hover': {
          backgroundColor: buttonStyles[buttonType].hoverColor,
        },
        paddingLeft: 4,
        paddingRight: 4,
        ...props.sx,
      }}
      startIcon={selectIcon(buttonType)}
    >
      {children}
    </MUIButton>
  );
};
