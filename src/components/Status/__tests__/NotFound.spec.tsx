import { render, screen } from '@testing-library/react';

import { NotFound } from '../NotFound';

describe('NotFound component test', () => {
  it('should render default text', () => {
    const defaultText = 'City is not found.';

    render(<NotFound />);
    expect(screen.getByText(defaultText)).toBeInTheDocument();
  });

  it('should render text from props', () => {
    const defaultText = 'Text';

    render(<NotFound message={defaultText} />);
    expect(screen.getByText(defaultText)).toBeInTheDocument();
  });
});
