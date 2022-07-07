import { Box } from '@mui/material';
import React from 'react';

import { useTypedSelector } from '../../hooks/useTypedSelector';

import { CityCard } from './index';

export const CardList = () => {
  const { data } = useTypedSelector((state) => state.cities);

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gridGap: '10px',
      }}
      data-testid='cardList'
    >
      {data?.map((city) => {
        return <CityCard key={city.id} city={city} />;
      })}
    </Box>
  );
};
