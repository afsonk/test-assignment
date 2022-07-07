import { Details } from '@mui/icons-material';
import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, screen, waitFor } from '@testing-library/react';

import { Statuses } from '../../../models';
import citiesSlice from '../../../store/citiesSlice';
import { cityMockList, renderTestApp } from '../../../tests';
import { getItemTemp } from '../../../utils';
import { CityCard } from '../index';

describe('Card component test', () => {
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

  it('should render without errors', () => {
    renderTestApp(<CityCard city={cityMockList[0]} />, { path: '/', store });
    expect(screen.getByTestId('cardItem')).toBeInTheDocument();
  });

  it('should render props correctly', () => {
    const element = cityMockList[0];
    const expectedTemp = getItemTemp(element.main.temp);

    renderTestApp(<CityCard city={cityMockList[0]} />, { path: '/', store });

    expect(screen.getByText(element.name)).toBeInTheDocument();
    expect(screen.getByTestId('cardItemTemp').innerHTML).toBe(expectedTemp);
  });

  it('should redirect to the details page', () => {
    renderTestApp(
      <>
        <Details />
        <CityCard city={cityMockList[0]} />
      </>,
      { path: '/', store }
    );

    const link = screen.getByRole('link');

    fireEvent.click(link);

    waitFor(async () => {
      const detailsPage = await screen.findByTestId('detailedPage');
      expect(detailsPage).toBeInTheDocument();
    });
  });
});
