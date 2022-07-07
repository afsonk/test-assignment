import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';

interface IProps {
  message?: string | null;
}

export const NotFound: FC<IProps> = ({ message = 'City is not found.' }) => {
  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80vh' }}
      data-testid='notFound'
    >
      <Typography>{message}</Typography>
    </Box>
  );
};
