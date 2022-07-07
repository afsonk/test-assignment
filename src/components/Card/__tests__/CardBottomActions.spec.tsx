import { fireEvent, render, screen } from '@testing-library/react';

import { CardBottomActions } from '../CardBottomActions';

describe('CardBottomActions component test', () => {
  const handleChange = jest.fn();
  const handleRefresh = jest.fn();

  it('should render without crash', () => {
    render(<CardBottomActions handleRefresh={handleRefresh} handleDelete={handleChange} />);
    expect(screen.getByTestId('cardActions')).toBeInTheDocument();
  });

  it('should call prop function on button click', () => {
    render(<CardBottomActions handleRefresh={handleRefresh} handleDelete={handleChange} />);

    const refreshButton = screen.getByTestId('refreshButton');
    const deleteButton = screen.getByTestId('deleteButton');

    fireEvent.click(refreshButton);
    fireEvent.click(deleteButton);

    expect(handleChange).toHaveBeenCalled();
    expect(handleRefresh).toHaveBeenCalled();
  });
});
