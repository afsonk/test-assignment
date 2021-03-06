import React, { FC, lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { RouteNames } from '../../models';
import { Home } from '../../pages';
import { Header } from '../Header';
import { Loading } from '../Status/Loading';

const LazyDetailedPage = lazy(() => import('../../pages/Detailed'));

export const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={RouteNames.HOME} element={<Home />} />
        <Route
          path={RouteNames.DETAILED}
          element={
            <Suspense fallback={<Loading />}>
              <LazyDetailedPage />
            </Suspense>
          }
        />
        <Route
          path={RouteNames.NOT_FOUND}
          element={<Navigate to={RouteNames.HOME}/>}
        />
      </Routes>
    </BrowserRouter>
  );
};
