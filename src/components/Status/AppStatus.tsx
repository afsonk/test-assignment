import React, { FC, ReactNode } from 'react';

import { Statuses } from '../../models';

import { Loading } from './Loading';
import { NotFound } from './NotFound';

interface IProps {
  status: Statuses;
  children: ReactNode;
  message?: string | null;
}

export const AppStatus: FC<IProps> = ({ status, children, message }) => {
  return (
    <>
      {status === Statuses.IDLE && children}
      {status === Statuses.LOADING && <Loading />}
      {status === Statuses.ERROR && <NotFound message={message} />}
    </>
  );
};
