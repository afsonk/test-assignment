import { render, screen } from '@testing-library/react';

import { Statuses } from '../../../models';
import { AppStatus } from '../AppStatus';

describe('AppStatus component test', () => {
  const child = <div>Test</div>;

  it('should render children', () => {
    render(<AppStatus status={Statuses.IDLE}>{child}</AppStatus>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('should render loading component', () => {
    render(<AppStatus status={Statuses.LOADING}>{child}</AppStatus>);

    expect(screen.queryByText('Test')).not.toBeInTheDocument();
    expect(screen.getByTestId('loadingSpinner')).toBeInTheDocument();
  });

  it('should render notFound component', () => {
    render(<AppStatus status={Statuses.ERROR}>{child}</AppStatus>);

    expect(screen.queryByText('Test')).not.toBeInTheDocument();
    expect(screen.getByTestId('notFound')).toBeInTheDocument();
  });
});
