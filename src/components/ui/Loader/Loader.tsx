import React, { FC } from 'react';
import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';

interface LoaderProps {
  loading?: boolean;
}

export const Loader: FC<LoaderProps> = ({ loading }) => {
  if (!loading) return null;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(255,255,255,0.5)',
        zIndex: 9999,
        backdropFilter: 'blur(5px)',
      }}
    >
      <CircularProgress />
    </Box>
  );
};
