import { configureStore } from '@reduxjs/toolkit';
import { screen } from '@testing-library/react';

import { Statuses } from '../../../models';
import citiesSlice from '../../../store/citiesSlice';
import { renderTestApp, cityMockList } from '../../../tests';
import { CardList } from '../CardList';

describe('CardList component test', () => {
  it('should render without errors', () => {
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

    renderTestApp(<CardList />, { path: '/', store });
    expect(screen.getByTestId('cardList')).toBeInTheDocument();
    expect(screen.queryAllByTestId('cardItem').length).toBe(0);
  });

  it('should render 2 card items', () => {
    const preloadedState = {
      cities: {
        data: cityMockList,
        status: Statuses.IDLE,
        message: null,
      },
    };

    const store = configureStore({
      reducer: { cities: citiesSlice },
      preloadedState,
    });

    renderTestApp(<CardList />, { path: '/', store });
    expect(screen.getByTestId('cardList')).toBeInTheDocument();
    expect(screen.queryAllByTestId('cardItem').length).toBe(2);
  });
});
