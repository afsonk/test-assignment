import { Box, CircularProgress } from '@mui/material';
import React, { FC } from 'react';

export const Loading: FC = () => {
  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80vh' }}
      data-testid='loadingSpinner'
    >
      <CircularProgress />
    </Box>
  );
};
