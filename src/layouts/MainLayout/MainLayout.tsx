import { FC, PropsWithChildren, useEffect } from 'react';
import { Box, useTheme } from '@mui/material';
import { NavBar, SideBar, PageTitle, Loader } from '@/components';
import { useUI } from '@/context';
import { AnimatedContainer } from './AnimatedContainer';
import { useLoader } from '@/context';

interface Props extends PropsWithChildren {
  title?: string;
}

const MainLayout: FC<Props> = ({ children, title }) => {
  const theme = useTheme();

  const { sideBarIsOpen } = useUI();
  const { isLoading } = useLoader();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div>
      <Box>
        <Loader loading={isLoading} />
        <NavBar />
        <SideBar />

        <AnimatedContainer theme={theme} open={sideBarIsOpen}>
          <Box px={6} mt={12}>
            <PageTitle title={title} />
            {children}
          </Box>
        </AnimatedContainer>
      </Box>
    </div>
  );
};

export default MainLayout;
