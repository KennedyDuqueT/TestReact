import { FC } from 'react';
import { useRouter } from 'next/router';
import { hexToRgba } from '@/themes/helpers';
import { Grid, ButtonBase, Box, Typography, useTheme } from '@mui/material';

export interface DahboardItem {
  text: string;
  url: string;
  icon: JSX.Element;
}

type Props = DahboardItem;

export const DashboardMenuItem: FC<Props> = ({ text, url, icon }) => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Grid item xs={6} sm={4} md={3} lg={2}>
      <ButtonBase sx={{ width: 1 }} onClick={() => router.push(url)}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width={1}
          px={4}
          sx={{ minHeight: 160, boxShadow: 2, borderRadius: 2, '&:hover': { backgroundColor: hexToRgba(theme.palette.primary.main, 0.1) } }}
        >
          {icon}
          <Typography variant="body2" textAlign="center">
            {text}
          </Typography>
        </Box>
      </ButtonBase>
    </Grid>
  );
};
