import { useState, FC, MouseEvent } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { GetApp, Image, PictureAsPdf, ViewHeadlineOutlined } from '@mui/icons-material';

interface Props {
  excel?: boolean;
  pdf?: boolean;
  image?: boolean;
}

export const ExportMenu: FC<Props> = ({ excel, pdf, image }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant="outlined"
        color="primary"
      >
        Exportar
        <GetApp fontSize="small" sx={{ ml: 1 }} />
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {excel && (
          <MenuItem onClick={handleClose}>
            <ViewHeadlineOutlined color="success" fontSize="small" sx={{ mr: 2 }} />
            Excel
          </MenuItem>
        )}

        {pdf && (
          <MenuItem onClick={handleClose}>
            <PictureAsPdf color="error" fontSize="small" sx={{ mr: 2 }} /> PDF
          </MenuItem>
        )}

        {image && (
          <MenuItem onClick={handleClose}>
            <Image color="info" fontSize="small" sx={{ mr: 2 }} /> Imagen
          </MenuItem>
        )}
      </Menu>
    </div>
  );
};
