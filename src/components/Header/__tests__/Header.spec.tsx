import { configureStore } from '@reduxjs/toolkit';
import { screen } from '@testing-library/react';

import { Statuses } from '../../../models';
import citiesSlice from '../../../store/citiesSlice';
import { renderTestApp } from '../../../tests';
import { Header } from '../index';

describe('Header component test', () => {
  const preloadedState = {
    cities: {
      data: [],
      status: Statuses.IDLE,
      message: null,
    },
  };

  const store = configureStore({
    reducer: { cities: citiesSlice },
    preloadedState,
  });

  it('should render header and searchBar', () => {
    renderTestApp(<Header />, { path: '/', store });
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('searchBar')).toBeInTheDocument();
  });

  it('should not render searchBar if page is not main', () => {
    renderTestApp(<Header />, { path: '/12341', store });
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.queryByTestId('searchBar')).not.toBeInTheDocument();
  });
});
