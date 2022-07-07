import { Container } from '@mui/material';
import React, { FC } from 'react';

import { AppStatus, CardList } from '../../components';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const Home: FC = () => {
  const { status, message } = useTypedSelector((state) => state.cities);

  return (
    <Container maxWidth='md' sx={{ mt: '20px' }}>
      <AppStatus status={status} message={message}>
        <CardList />
      </AppStatus>
    </Container>
  );
};
