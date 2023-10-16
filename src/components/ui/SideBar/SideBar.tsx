import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Collapse, Drawer, List, useMediaQuery, useTheme } from '@mui/material';
import { UIModels } from '@/models';
import { useUI } from '@/context';
import { SideBarMenuItem } from './SideBarMenuItem';
import { useMenuItems } from './useMenuItems';

type OpenSubMenuType = { [key: string]: boolean };

export const SideBar: FC = () => {
  const router = useRouter();
  const theme = useTheme();
  const { items } = useMenuItems();
  const { sideBarIsOpen, actions } = useUI();
  const [openSubMenu, setOpenSubMenu] = useState<OpenSubMenuType>({});
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
  const sideBarWidth = UIModels.Sizes[sideBarIsOpen ? 'SIDEBAR_WIDTH' : 'SIDEBAR_COLLAPSED_WIDTH'];

  const onClickMainMenu = (menuName: string) => {
    setOpenSubMenu((prev) => ({ ...prev, [menuName]: !prev[menuName] }));
  };

  const onClickSingleMenu = (route: string) => {
    router.push(route);
  };

  return (
    <Box component="nav">
      <Drawer
        anchor="left"
        open={matchUpMd || sideBarIsOpen}
        onClose={actions?.toggleSideBar}
        variant={matchUpMd ? 'persistent' : 'temporary'}
        ModalProps={{ keepMounted: true }}
        classes={{ paper: 'main-app-sidebar' }}
        sx={{
          '& .MuiDrawer-paper': {
            width: sideBarWidth,
            [theme.breakpoints.up('md')]: {
              top: `${UIModels.Sizes.APPBAR_HEIGHT}px`,
            },
          },
        }}
      >
        <List>
          {items.map((menuItem, index) => (
            <div key={index}>
              <SideBarMenuItem
                item={menuItem}
                isSubmenu={false}
                sideBarIsOpen={sideBarIsOpen}
                isOpen={!!openSubMenu[menuItem.name]}
                onClick={menuItem.subMenuItems ? onClickMainMenu : onClickSingleMenu}
              />

              <Collapse in={sideBarIsOpen && openSubMenu[menuItem.name]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {menuItem.subMenuItems?.map((submenuItem, submenuIndex) => (
                    <SideBarMenuItem
                      key={submenuIndex}
                      item={submenuItem}
                      isSubmenu={true}
                      sideBarIsOpen={sideBarIsOpen}
                      isOpen={!!openSubMenu[submenuItem.name]}
                      onClick={submenuItem.subMenuItems ? onClickMainMenu : onClickSingleMenu}
                    />
                  ))}
                </List>
              </Collapse>
            </div>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
