import { Delete, Refresh } from '@mui/icons-material';
import { Box, CardActions, IconButton } from '@mui/material';
import React, { FC, memo } from 'react';

const style = { display: 'flex', justifyContent: 'space-between', width: '100%' };

interface IProps {
  handleRefresh: () => void;
  handleDelete: () => void;
}

export const CardBottomActions: FC<IProps> = memo(({ handleDelete, handleRefresh }) => {
  return (
    <CardActions data-testid='cardActions'>
      <Box sx={style}>
        <IconButton onClick={handleRefresh} data-testid='refreshButton'>
          <Refresh />
        </IconButton>
        <IconButton onClick={handleDelete} data-testid='deleteButton'>
          <Delete />
        </IconButton>
      </Box>
    </CardActions>
  );
});
