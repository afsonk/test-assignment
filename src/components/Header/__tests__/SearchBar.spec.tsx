import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, screen } from '@testing-library/react';

import { Statuses } from '../../../models';
import citiesSlice from '../../../store/citiesSlice';
import { renderTestApp } from '../../../tests';
import { SearchBar } from '../SearchBar';

describe('SearchBar component test', () => {
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
    renderTestApp(<SearchBar />, { path: '/', store });
    expect(screen.getByTestId('searchBar')).toBeInTheDocument();
  });

  it('should disable submit button when search field is empty', () => {
    renderTestApp(<SearchBar />, { path: '/', store });

    const button = screen.getByTestId('submitButton') as HTMLButtonElement;
    const inputField = screen.getByRole('textbox') as HTMLInputElement;

    expect(button).toBeDisabled();

    fireEvent.change(inputField, { target: { value: 'test' } });

    expect(inputField.value).toBe('test');
    expect(button).not.toBeDisabled();
  });
});
