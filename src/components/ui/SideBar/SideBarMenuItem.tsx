import { FC, cloneElement } from 'react';
import { ArrowDropUp, ArrowDropDown, ArrowRight } from '@mui/icons-material';
import { ListItemButton, ListItemIcon, Tooltip, ListItemText, ListItem } from '@mui/material';
import { MenuItem } from './useMenuItems';

interface Props {
  item: MenuItem;
  sideBarIsOpen: boolean;
  isSubmenu: boolean;
  isOpen: boolean;
  onClick: (routeOrName: string) => void;
}

const sxIcon = { color: 'primary.contrastText' };

export const SideBarMenuItem: FC<Props> = ({ item, onClick, isSubmenu, isOpen, sideBarIsOpen }) => {
  return (
    <ListItem sx={isSubmenu ? { py: 0.25 } : { display: 'block', pb: 0 }}>
      <ListItemButton
        onClick={() => onClick(item.route || item.name)}
        sx={{
          minHeight: 46,
          justifyContent: sideBarIsOpen ? 'initial' : 'center',
          borderRadius: 1,
          px: 2,
          backgroundColor: item.isActive ? 'common.sideBarMenuActiveBg' : `common.sideBar${isSubmenu ? 'SubMenu' : 'Menu'}Bg`,
          '&:hover': {
            backgroundColor: `common.sideBar${isSubmenu ? 'SubMenu' : 'Menu'}HoverBg`,
          },
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: sideBarIsOpen ? 2 : 'auto',
            justifyContent: 'center',
          }}
        >
          {isSubmenu ? <ArrowRight /> : item.icon && cloneElement(item.icon, { sx: sxIcon })}
        </ListItemIcon>

        <Tooltip title={item.name.length > 15 ? item.name : ''} arrow>
          <ListItemText
            primaryTypographyProps={{
              variant: 'body2',
              noWrap: true,
              fontWeight: 700,
            }}
            primary={item.name}
            sx={{ opacity: sideBarIsOpen ? 1 : 0, color: isSubmenu ? undefined : '#fff' }}
          />
        </Tooltip>

        {sideBarIsOpen &&
          item.subMenuItems?.length! > 0 &&
          (isOpen ? <ArrowDropUp sx={{ color: 'white' }} /> : <ArrowDropDown sx={{ color: 'white' }} />)}
      </ListItemButton>
    </ListItem>
  );
};
